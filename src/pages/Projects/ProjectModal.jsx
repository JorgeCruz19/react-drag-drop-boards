import { useState, useEffect } from "react";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";

import {formatDateToday} from "../../utils/formatDates"
import Modal from "../../components/Modal/Modal";
import db from "../../firebase.config";

const projectSchema = yup.object({
	name: yup.string().required(),
	description: yup.string().required(),
	date: yup.date().required().nullable().default(() => new Date().toLocaleDateString()),
});

const ProjectModal = ({ title, root, isEdit, id }) => {
	const [isLoading, setIsLoading] = useState(false);


	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(projectSchema),
	});

	isEdit && useEffect(() => {
		setValuesForm()
	}, []);

	const setValuesForm = async () => {
		const fields = ["name", "description", "date"];
		const docRef = doc(db, "projects", id);
		const docSnap = await getDoc(docRef);
		const fieldsProject = {...docSnap.data(), date: new Date(docSnap.data().date.seconds * 1000).toISOString().substring(0, 10)};
		fields.forEach((field) => setValue(field, fieldsProject[field]));
	}

	const onSubmit = async (data) => {
		setIsLoading(true);
		const { name, description, date } = data;
		if (!isEdit) {
			await addDoc(collection(db, "projects"), {
				name,
				description,
				date,
			});
			reset({ name: "", description: "", date: "" });
			toast.success("¡Project saved!");
		}
		else{
			await updateDoc(doc(db, "projects", id), {
				name,
				description,
				date,
			});
			toast.success("¡Project updated!");
		}
		setIsLoading(false);
	};

	return (
		<Modal title={title} root={root}>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<div className="form-content">
					<label htmlFor="name" className="form-label">
						Nombre:{" "}
					</label>
					<input
						id="name"
						{...register("name")}
						type="text"
						className="form-control"
						placeholder="Ingrese el nombre"
					/>
					{errors.name && (
						<small className="invalid-feedback">{errors.name?.message}</small>
					)}
				</div>
				<div className="form-content">
					<label htmlFor="description" className="form-label">
						Descripcion:{" "}
					</label>
					<input
						id="description"
						{...register("description")}
						type="text"
						className="form-control"
						placeholder="Ingrese la descripción"
					/>
					{errors.description && (
						<small className="invalid-feedback">
							{errors.description?.message}
						</small>
					)}
				</div>
				<div className="form-content">
					<label htmlFor="date" className="form-label">
						Fecha:{" "}
					</label>
					<input
						id="date"
						{...register("date")}
						type="date"
						className="form-control"
						defaultValue={formatDateToday()}
						min={formatDateToday()}
					/>
					{errors.date && (
						<small className="invalid-feedback">{errors.date?.message}</small>
					)}
				</div>
				<button
					type="submit"
					className="btn-submit"
					disabled={isLoading ? true : false}
				>
					{isEdit ? "Actualizar" : "Guardar"} 
				</button>
				<ToastContainer />
			</form>
		</Modal>
	);
};

export default ProjectModal;
