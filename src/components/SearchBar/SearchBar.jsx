import { Form, Field, Formik } from "formik"
import css from "./SearchBar.module.css"

export default function SearchBar({ handleSubmit }) {
    return (
        <header className={css.container}>
            <Formik initialValues = {{
                search: ""
            }} onSubmit={handleSubmit}>
                <Form>
                    <Field className={css.searchInput} name = "search" />
                    <button className={css.searchButton} type = "submit">Search</button>
                </Form>
            </Formik>
        </header>
    )
}