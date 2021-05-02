import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish:null
        }
        console.log("Menu component const called");
    }
    componentDidMount(){
        console.log("Menu component componentDidMount called");
    }
    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }
    renderDish(dish){
        if(dish!=null){
            return(
                //console.log(this.state.selectedDish)
                <DishDetail selectedDish={this.state.selectedDish}/>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){ //ui part
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.onDishSelect(dish)}>
                        <CardImg width="100%" src ={dish.image} alt={dish.name}/>
                        
                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            );
        });
        console.log("Menu component render called"); 
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>

        );
    }
}

export default Menu;