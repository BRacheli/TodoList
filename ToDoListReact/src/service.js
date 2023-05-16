import axios from 'axios';

// axios.defaults.baseURL="http://localhost:5062"

const apiClient=axios.create({
  baseURL:process.env.REACT_APP_API
})

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },
  
  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/items`,{"id":0,"name":name,"isComplete":false});
    return result.data;
  },
  
  setCompleted: async(id, name, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await axios.put(`/items/${id}`,{"id":id,"name":name,"isComplete":isComplete})
    return result.data;
  },
  
  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`/items/${id}`)
    return result.data;
  }
};
