import React from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import CountryTabs from './components/CountryTabs';
import Articles from './components/Articles';


const API_KEY = 'e1a470cb7a7a46c1a94f3d0736c3c81d';

class App extends React.Component{
  state={
   title1:undefined,
   author1:undefined,
   content1:undefined,
   img1:undefined,
   error:undefined
  }

  
  getNews = async (e) =>
  {
    e.preventDefault();
    const phrase = e.target.elements.phrase.value;
    // Make HTTP request with Axios
    axios.get(`https://newsapi.org/v2/everything?q=${phrase}&apiKey=${API_KEY}`)
    .then(res => {
      // Set state with result
      this.setState({ 
      title1:res.data.articles[0].title,
      title2:res.data.articles[1].title,
      title3:res.data.articles[2].title,
     
      author1:res.data.articles[0].author,
      author2:res.data.articles[1].author,
      author3:res.data.articles[2].author,
  
      content1:res.data.articles[0].content,
      content2:res.data.articles[1].content,
      content3:res.data.articles[2].content,
  
      img1:res.data.articles[0].urlToImage,
      img2:res.data.articles[1].urlToImage,
      img3:res.data.articles[2].urlToImage,
      error:""

    });
  })}
  
getUS =  async (e) =>
  {
   axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    .then(res => {
    this.setState({
      title1:res.data.articles[0].title,
      title2:res.data.articles[1].title,
      title3:res.data.articles[2].title,
     
      author1:res.data.articles[0].author,
      author2:res.data.articles[1].author,
      author3:res.data.articles[2].author,
  
      content1:res.data.articles[0].content,
      content2:res.data.articles[1].content,
      content3:res.data.articles[2].content,
  
      img1:res.data.articles[0].urlToImage,
      img2:res.data.articles[1].urlToImage,
      img3:res.data.articles[2].urlToImage,
      error:""
    })
   
  })}


  getIN =  async (e) =>
  {
    axios.get(`https://newsapi.org/v2/top-headlines?country=IN&apiKey=${API_KEY}`)
    .then(res => {
    this.setState({
      title1:res.data.articles[0].title,
      title2:res.data.articles[1].title,
      title3:res.data.articles[2].title,
     
      author1:res.data.articles[0].author,
      author2:res.data.articles[1].author,
      author3:res.data.articles[2].author,
  
      content1:res.data.articles[0].content,
      content2:res.data.articles[1].content,
      content3:res.data.articles[2].content,
  
      img1:res.data.articles[0].urlToImage,
      img2:res.data.articles[1].urlToImage,
      img3:res.data.articles[2].urlToImage,
      error:""
    })
   
  })}
  getBR =  async (e) =>
  {
    axios.get(`https://newsapi.org/v2/top-headlines?country=BR&apiKey=${API_KEY}`)
    .then(res => {
    this.setState({
      title1:res.data.articles[0].title,
      title2:res.data.articles[1].title,
      title3:res.data.articles[2].title,
     
      author1:res.data.articles[0].author,
      author2:res.data.articles[1].author,
      author3:res.data.articles[2].author,
  
      content1:res.data.articles[0].content,
      content2:res.data.articles[1].content,
      content3:res.data.articles[2].content,
  
      img1:res.data.articles[0].urlToImage,
      img2:res.data.articles[1].urlToImage,
      img3:res.data.articles[2].urlToImage,
      error:""
    })
   
  })}
  getCA =  async (e) =>
  {
    axios.get(`https://newsapi.org/v2/top-headlines?country=CA&apiKey=${API_KEY}`)
    .then(res => {
    this.setState({
      title1:res.data.articles[0].title,
      title2:res.data.articles[1].title,
      title3:res.data.articles[2].title,
     
      author1:res.data.articles[0].author,
      author2:res.data.articles[1].author,
      author3:res.data.articles[2].author,
  
      content1:res.data.articles[0].content,
      content2:res.data.articles[1].content,
      content3:res.data.articles[2].content,
  
      img1:res.data.articles[0].urlToImage,
      img2:res.data.articles[1].urlToImage,
      img3:res.data.articles[2].urlToImage,
      error:""
    })
   
  })}


  render(){
    return(
      <div>
      <Search  getNews={this.getNews}/>
      <CountryTabs getUS={this.getUS}
      getIN={this.getIN}
      getBR={this.getBR}
      getCA={this.getCA}
      getNews={this.getNews}/>
      <Articles 
        title1={this.state.title1}
        title2={this.state.title2}
        title3={this.state.title3}
        author1={this.state.author1}
        author2={this.state.author2}
        author3={this.state.author3}
        content1={this.state.content1}
        content2={this.state.content2}
        content3={this.state.content3}
        img1={this.state.img1}
        img2={this.state.img2}
        img3={this.state.img3}
        error={this.state.error}
      />
    </div>
    );
   
  }
}
export default App;
