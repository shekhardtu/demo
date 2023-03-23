import React, { useState, useEffect } from "react"
import Question from "./Question"
const quizJSON = {
  quizzes: [
    {
      question:
        "What was the reason for Elon Musk's decision to stop accepting Bitcoin payments for Tesla?",
      answer: "Environmental concerns",
      distractors: [
        "Poor market performance",
        "Lack of investment opportunities",
        "Environmental concerns",
        "System transaction efficiency",
      ],
    },
    {
      question: "What did Elon Musk tweet about Dogecoin?",
      answer:
        "He was working with developers to improve system transaction efficiency.",
      distractors: [
        "He was going to accept payments in Dogecoin",
        "He was working with developers to improve system transaction efficiency.",
        "He was going to accept payments in Bitcoin",
        "He was going to stop developing Dogecoin",
      ],
    },
    {
      question:
        "What caused the world's largest cryptocurrency to hit a two-month low recently?",
      answer: "Elon Musk's tweets supporting Dogecoin",
      distractors: [
        "Elon Musk's tweets supporting Dogecoin",
        "A global pandemic",
        "A decrease in demand",
        "A decrease in supply",
      ],
    },
    {
      question: "Which of the following statements is true?",
      answer: "Dogecoin rallied by about 20 percent.",
      distractors: [
        "Dogecoin rallied by about 20 percent.",
        "Bitcoin hit a two-month low.",
        "SpaceX CEO has often tweeted in support of Bitcoin.",
        "Elon Musk has publicly supported Bitcoin in recent months.",
      ],
    },
    {
      question:
        "What was Tesla's stance on the rapidly increasing use of fossil fuels for Bitcoin mining and transaction?",
      answer: "Suspending vehicle purchases using the cryptocurrency",
      distractors: [
        "No stance",
        "Encouraging the use of fossil fuels",
        "Suspending vehicle purchases using the cryptocurrency",
        "Increasing vehicle purchases using the cryptocurrency",
      ],
    },
    {
      question:
        "What motivated Elon Musk to tweet about Bitcoin and its effects on fossil fuels?",
      answer: "Concern for rapidly increasing use of fossil fuels.",
      distractors: [
        "Disbelief in the value of crypto.",
        "Wanting people to buy Tesla cars with Bitcoin.",
        "Concern for rapidly increasing use of fossil fuels.",
        "A strong desire to reduce coal use.",
      ],
    },
    {
      question:
        "What did some Twitter users suggest to Elon Musk after his statement on Bitcoin's value?",
      answer: "That Dogecoin is here to stay",
      distractors: [
        "That Elon Musk's statement was wrong",
        "That Bitcoin's value will surge again",
        "That Dogecoin is here to stay",
        "That crypto will replace traditional currency",
      ],
    },
    {
      question:
        "What did some Twitter users comment on Elon Musk's recent statement?",
      answer: "They welcomed Musk's statement.",
      distractors: [
        "They welcomed Musk's statement.",
        "Crypto is not suitable to become the world's future currency.",
        "It triggered a downward spiral for Bitcoin value.",
        "Dogecoin will not stay for long.",
      ],
    },
  ],
}
export default function Quiz() {
  const [quizes, setQuizes] = useState([])
  useEffect(() => {
    fetchMoreData() // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    // let url = "https://api.jsonbin.io/v3/qs/6419a671ebd26539d09290a1"
    // let data = await fetch(url)
    // let }parsed = await data.json()
    // let quizzes = parsed ||  json
    setQuizes(quizes.concat(quizJSON.quizzes))
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {quizes.map((element, index) => {
            return (
              <Question
                text={element.question}
                des={element.distractors}
                answer={element.answer}
                key={index + element}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
