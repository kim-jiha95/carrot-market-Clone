
import {
        Alert
     } from "react-native";
     import axios from "axios";
     
// const host = 'http://3.34.198.18:20001/exchange'

// export async function getCateData( ) {
//     try{
//          const result = await axios.get(
//               {
//                    method: 'get',
//                    url: host+ '/exchangeBoardData',
//                    header: {
//                         authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDZiMDZhMDA2NjhlZTkzMjZmNGY0YzUiLCJpYXQiOjE2MTc2MjY4MDB9.FGc6aCdych26nSPrwFr1oei75iTA0weI8OFaIgvjY78"
//                    }
//               }
//          )
//          console.log(result.data)
//          return result
//     }
//    catch{  }

//  }

//  const result = await run()
// console.log(result)

// const axios = require('axios');

export async function getCateData() {
	const result = await axios({
		method: "get",
		url: "http://3.34.198.18:20001/exchange",
		headers: {
			authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDZiMDZhMDA2NjhlZTkzMjZmNGY0YzUiLCJpYXQiOjE2MTc2MjY4MDB9.FGc6aCdych26nSPrwFr1oei75iTA0weI8OFaIgvjY78'
		}
	})
	console.log(result.data.exchangeBoardData);
     return result.data.exchangeBoardData
}

