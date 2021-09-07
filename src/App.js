import './App.css';
import React, {useState} from 'react';
import questions from './questions.json'
import {Formik, Field, Form} from 'formik';
import cn from 'classnames';


function App() {
    const [answers, saveAnswers] = useState({});
    const [answer, setAnswer] = useState(" ");
    console.log(answer)
    let show = () => {
        alert(answers);
    }
    let submit = (values) => {
        let answer = JSON.stringify(values, null, 2);
        saveAnswers(answer);
        console.log(answers);

    }
    return (<div className={"outerContainer"}>
            <div className={"container"}>
                <div className={"form"}>
                    <Formik
                        initialValues={{questions: questions.questions.question}}
                        onSubmit={submit}>
                        <Form>
                            {questions.questions.map((item, i) => (
                                <div key={i} className={cn("form__item", "item")}>
                                    <div className={"item__question"}>
                                        {item.question}
                                    </div>

                                    <Field className={"item__answer"} onChange={(e)=>
                                         setAnswer(e.currentTarget.value)
                                    } value={answer}
                                           key={i} id={item.question} name={item.question}
                                           placeholder={" *Введите текст"}/>
                                </div>
                            ))}

                            <button className={"form__button"} type="submit">SEND</button>
                            <div>
                                <button className={"form__check"} onClick={show}>CHECK</button>
                            </div>
                        </Form>
                    </Formik>

                </div>
            </div>
        </div>
    );
}


export default App;
