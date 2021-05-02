import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';
import { Media } from 'reactstrap';
class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const sdish = this.props.selectedDish;
        console.log(sdish)
            const comment = this.props.selectedDish.comments.map((dish)=>{
                return(
                    <div key={dish.id} className="list-unstyled">
                        <Media tag="li">
                            <Media body>
                                <p>{dish.comment}</p>
                                <p>--{dish.author} , {dish.date}</p>
                            </Media>
                        </Media>

                    </div>
                );
                
            });

            return(
                <div className="container">
                <div className="row">
            <div className="col-12 col-md-5 m-1" >    
                <Card>
                        <CardImg width="100%" src ={sdish.image} alt={sdish.name}/>
                            <CardBody>
                                <CardTitle>{sdish.name}</CardTitle>
                                <CardText>{sdish.description}</CardText>
                            </CardBody>
                </Card>  
            </div>
            <div className="col-12 col-md-5 m-1">
                <div>
                <h4>Comments</h4>
                </div>
                <Media list>
                    {comment}
                </Media>

            </div>
            </div>
            </div>
            );

    }
}

export default DishDetail;



