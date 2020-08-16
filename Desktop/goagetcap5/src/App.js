import React,{Component} from 'react';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      members:[],
      searchField : ''
    }

  }

  componentDidMount() {
    const users = [
      {
        id:1,
        name:'Otto Alexander',
        linkedin:'https://www.linkedin.com/in/otto-alexander/',
        image:'./ej9tbhei.bmp'
        
      },
      {
        id:2,
        name:'Mario Lorenzo',
        linkedin:'https://www.linkedin.com/in/mario7lorenzo/',
        image:'./95rot1ix.bmp'
      },
      {
        id:3,
        name:'Dick Jessen',
        linkedin:'https://www.linkedin.com/in/dickjessen/',
        image:'./qliz96kw.bmp'
      },
      {
        id:4,
        name:'Fidella Widjojo',
        linkedin:'https://www.linkedin.com/in/fidella-widjojo-896b24192/',
        image:'./ngib4nez.bmp'
      },
      {
        id:5,
        name:'Ivonne Khomas',
        linkedin:'https://www.linkedin.com/in/ivonne-khomas-b939031a3/',
        image:'./133312.jpg'
      },
      {
        id:6,
        name:'Hokiewan Thezeus',
        linkedin:'https://www.linkedin.com/in/hokiewan-thezeus/',
        image:'./vdmst7xs.bmp'
      },
      {
        id:7,
        name:'Matheus Aaron',
        linkedin:'https://www.linkedin.com/in/matheusaaron/',
        image:'./25kwi7zr.bmp'
      },
      {
        id:8,
        name:'Austin Santoso',
        linkedin:'https://www.linkedin.com/in/austinsantoso/',
        image:'./0i5lxabv.bmp'
      },
      {
        id:9,
        name:'Geoffrey Bryan',
        linkedin:'https://www.linkedin.com/in/geoffreylion/',
        image:'./zwvfovcg.bmp'
      },
      {
        id:10,
        name:'Austen Jeremy',
        linkedin:'https://www.linkedin.com/in/austenjs/',
        image:'./21765274_1844492998901820_7157605741638401878_n1.jpg'
      },
      {
        id:11,
        name:'Jeff Ivanos',
        linkedin:'https://www.linkedin.com/in/jeffgana/',
        image:'./x7if2fin.bmp'
      },
      {
        id:12,
        name:'Alvin Gunawan',
        linkedin:'https://www.linkedin.com/in/alvin-gunawan/',
        image:'./37kdrwuv.bmp'
      },
      {
        id:13,
        name:'Alvon Gunawan',
        linkedin:"https://www.instagram.com/alvongun/",
        image:'./37kdrwuv.bmp'
      },
      {
        id:14,
        name:'Vishandi Rudy',
        linkedin:'https://www.linkedin.com/in/vishandi-rudy-keneta-22b89b186/',
        image:'./07xo8frt.bmp'
      },
      {
        id:15,
        name:'Jonathan Kwok',
        linkedin:'https://www.linkedin.com/in/jonathan-kwok-a159591b4/in',
        image:'./v7jh4j4f.bmp'
      },
    ];
    this.setState({members:users});
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }
  render(){
  const { members,searchField } = this.state;
  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
      <div className="App">
        <h1>GoA Family</h1>
        <SearchBox 
          placeholder = 'search members'
          handleChange = {this.handleChange}
        />
        <CardList members={filteredMembers} />
      </div>
    );
  }
}

export default App;
