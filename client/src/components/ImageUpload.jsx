import React, {Component} from 'react';
import {storage} from '../firebase';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
      
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }

    handleUpload = () => {
        const {image} = this.state;

        if(image) {

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            //progress function ...
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress})

        }, (error) => {
            //error function ...
            console.log(error);
        }, () => {
            //complete function ....
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url})
                this.props.handleUpload({url})
            })
        });
        }
    }

    render() {
    
        return (
            
            <>     
            <input type="file" onChange={this.handleChange}/>
            <br/>
           <button style={{width: '30%'}} onClick={this.handleUpload}>Upload</button>
           <br/>
           <img src={this.state.url || 'https://via.placeholder.com/300x400'} alt="Uploaded images" height="300" width="400"/>
           <br/>
           <progress value={this.state.progress} max="100"/>
           </>
        )
    }
}

export default ImageUpload;