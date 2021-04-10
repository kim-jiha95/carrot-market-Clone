import {
        Alert
     } from "react-native";
     import axios from "axios";
     
	 const host = 'http://3.34.198.18:20001'
// homepage
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

// addhomepage
export async function secondhandpost(title, contents, price) {
	try { 
		console.log("성공")
	 	const token = await AsyncStorage.getItem('session');
	  const result = await axios({
			method: 'post',
			url: host + '/exchange',
			headers: {
				authorization: 'Bearer '+ token,
			},
			data: {
				title: title,
				contents: contents,		  
				price: price,
				images: []		  		  
			},
	  }); 
		console.log("성공")
	} catch (err) {
		const error = err.response.data.error || err.message;

    Alert.alert(error);
	}
}


	

import {
	Alert,
	AsyncStorage
   } from "react-native";
 import axios from "axios";
 
 const host = 'http://3.34.198.18:20001'
 // homepage
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
 
 // addhomepage
 export async function secondhandpost(title, contents, price, images) {
	try {
	   console.log("성공")
	   const token = await AsyncStorage.getItem('session');
	   const result = await axios({
		  method: 'post',
		  url: host + '/exchange',
		  headers: {
			 authorization: token
		  },
		  data: {
			 title: title,
			 contents: contents,
			 price: price,
			 images: images
		  },
	   });
	   console.log("성공")
	} catch (err) {
	   const error = err.response.data.error || err.message;
 
	   Alert.alert(error);
	}
 }
 
 // addhomepage_pic made by 상균
 export async function Pic(imageData) {
	result = []
	try {
	   console.log("성공")
	   let localUri = imageData.uri;
	   let filename = localUri.split('/').pop();
	   console.log(localUri)
   // Infer the type of the image
		 let match = /\.(\w+)$/.exec(filename);
	   let type = match ? `image/${match[1]}` : `image`;
	   console.log(imageData)
	   let formData = new FormData();
	   formData.append('images', {uri:localUri, name:filename, type:type })
	   const token = await AsyncStorage.getItem('session');
	   const result = await axios({
		  method: 'post',
		  url: host + '/image',
		  headers: {
			 'Content-type': 'multipart/form-data',
			 authorization: token
		  },
		  data: formData
	   });
	   console.log(result.data)
	   return result.data.images;
	} catch (err) {
	   const error = err.response.data.error || err.message;
 
	   Alert.alert(error);
	}
 }