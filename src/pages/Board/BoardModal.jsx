import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";

import Modal from "../../components/Modal/Modal";
import { addCard, addColumn } from "../../services/board";

const BoardSchema = yup.object({
	name: yup.string().required(),
});

const BoardModal = ({ title, root, type, id }) => {
	const projectId = window.location.pathname.split("/")[2];
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(BoardSchema),
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		const { name } = data;
		if (type != "column") {
			addCard(name, projectId, id);
			toast.success("¡Card saved!");
		} else {
			await addColumn(name, projectId);
			toast.success("¡Added column!");
		}
		reset({ name: "" });
		setIsLoading(false);
	};

	return (
		<>
			<Modal title={title} root={root}>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
					<div className="form-content">
						<label htmlFor="name" className="form-label">
							Nombre:{" "}
						</label>
						<input id="name" {...register("name")} type="text" className="form-control" placeholder="Ingrese el nombre" />
						{errors.name && <small className="invalid-feedback">{errors.name?.message}</small>}
					</div>
					<button type="submit" className="btn-submit" disabled={isLoading ? true : false}>
						Guardar
					</button>
				</form>
			</Modal>
			<ToastContainer />
		</>
	);
};

export default BoardModal;
