import './App.css';
import React from 'react';
import questions from './questions.json'
import {Formik, Field, Form} from 'formik';
import cn from 'classnames';


function App() {

    let submit = (values) => {
        localStorage.setItem('values', JSON.stringify(values));
        console.log(JSON.parse(localStorage.getItem('values')))

    }

    return (<div className={"outerContainer"}>
            <div className={"container"}>
                <div className={"form"}>
                    <Formik
                        initialValues={{questions: questions.questions.question}}
                        onSubmit={(values => submit(values))}>
                        {({
                              values,handleChange
                          }) => (
                        <Form>
                            {questions.questions.map((item, i) => (
                                <div key={i} className={cn("form__item", "item")}>
                                    <div className={"item__question"}>
                                        {item.question}
                                    </div>

                                    <Field className={"item__answer"}
                                           key={i} id={item.question} name={item.question}
                                           value={values.questions}
                                           onChange={handleChange}
                                           placeholder={" *Введите текст"}/>
                                </div>
                            ))}

                            <button className={"form__button"} type="submit">SEND</button>
                        </Form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    );
}


export default App;
