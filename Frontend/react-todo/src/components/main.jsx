import React from 'react'
import axios from "axios"
import {useEffect} from "react"


export default function Main() {

    const req = useEffect(() => {
        console.log("rendered")
        axios.get("http://localhost:3000")
            .then(function (response) {
            console.log(response.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .then(function () {
            console.log("function")
          });
      })

    return (
        <div>
            <h1>Hello, World</h1>
        </div>
    )
}
