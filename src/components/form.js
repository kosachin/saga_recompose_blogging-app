import { Field, Form } from "react-final-form";
import { Navigate } from "react-router-dom";
import PostFormHOC from "../hoc/postFormHOC";

const PostForm = ({ navigate, total, handleAddOnePostSuc }) => {
  const onSubmit = (values) => {
    handleAddOnePostSuc({ id: total + 1, ...values });
    navigate(-1);
  };
  const required = (value) => (value ? undefined : "Required");
  return (
    <div>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, form, values, valid }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Post Title</label>
              <Field
                name="title"
                component={"input"}
                type="text"
                validate={required}
              >
                {({ input, meta }) => (
                  <>
                    <input {...input} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </>
                )}
              </Field>
            </div>
            <div>
              <label>Post Body</label>
              <Field
                name="body"
                component={"input"}
                type="text"
                validate={required}
              >
                {({ input, meta }) => (
                  <>
                    <input {...input} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </>
                )}
              </Field>
            </div>
            <button type="submit" disabled={!valid}>
              submit
            </button>
            <pre>{JSON.stringify(values)}</pre>
          </form>
        )}
      </Form>
    </div>
  );
};
export default PostFormHOC(PostForm);
