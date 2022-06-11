import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase.config";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";

const projectSchema = yup.object({
	name: yup.string().required(),
	description: yup.string().required(),
	date: yup.date().required(),
});

const ProjectModal = ({ title, root }) => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(projectSchema),
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		const { name, description, date } = data;
		await addDoc(collection(db, "projects"), {
			name,
			description,
			date,
		});
		reset({ name: "", description: "", date: "" });
		toast.success("¡Project saved!");
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
					<label htmlFor="name" className="form-label">
						Descripcion:{" "}
					</label>
					<input
						id="name"
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
					<label htmlFor="name" className="form-label">
						Fecha:{" "}
					</label>
					<input
						id="name"
						{...register("date")}
						type="date"
						className="form-control"
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
					Guardar
				</button>
				<ToastContainer />
			</form>
		</Modal>
	);
};

export default ProjectModal;
