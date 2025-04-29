import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";
import fields from "./fields";
import { styles } from './styles'
const ContactsForm = ({ submitForm }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (values) => {
        submitForm(values);
        reset();
    };
    return (
        <div style={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                <div style={styles.flex}>
                <TextField style={styles.input}  {...fields.email} register={register} error={errors.email} />
                    <TextField
                        {...fields.username}
                        register={register}
                        error={errors.username}
                        style={styles.input}
                    />
                </div>
                <TextField style={styles.textarea} {...fields.textarea} register={register} error={errors.textarea} as="textarea"/>
                <Button style={styles.button}> Отправить</Button>
            </form>
        </div>
    )
}
export default ContactsForm