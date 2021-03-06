import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
        
        }

    render(){ //ui part
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.props.onClick(dish.id)}>
                        <CardImg width="100%" src ={dish.image} alt={dish.name}/>
                        
                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            );
        });
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                   
                </div>
            </div>

        );
    }
}

export default Menu;