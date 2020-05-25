import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



//ACTIONS
import fetchProductList from './actions/fetchProductList';
import fetchUserDetails from './actions/fetchUserDetails';

import  Tabs, {Tab} from '@vz-soe-utils/tab';
import  Bar from '@vz-soe-utils/bar';
//COMPONENTS
import { PizzaShoppieComponent } from './component/PizzaShoppieComponent';
import InputTextComponent from './component/InputTextComponent';
import { Spinner } from './component/Spinner';
import _ from 'lodash';


const testdata = {
  accentFill: true,
  hide: 0,
  accentPosition: 'bottom',
  label: "Tab1",
  uniqueId: '234234234',
  isActive: true,
}

const styles={
  fontSize: '98px',
}


export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {   startSpinner: true };
  }

  componentWillMount() { //CALLING ACTIONS
    this.props.fetchProductList();
    //this.props.fetchUserDetails();
  }

  componentDidMount() {
    this.loadashImplement();
  }
  handleOnclick = (e) => {
    console.log(e.target.innerHTML)
  }

  handleImageChange = (index) => {
   //let slidImages = [bckimage, bckimage1, bckimage2, bckimage3]
   let slidImages = []
    for (let i = 0; i < slidImages.length; i++) {
      if (i === index) {
        this.setState({
          image: slidImages[i]
        })
      }
    }
  }

  loadashImplement=()=>{
    const arryavalue = [4, false, 0, '', undefined, 3, 5, 4];
    const newArray = _.compact(arryavalue)
    console.log(newArray)

    const array1 = [7,7,9,3,4,2,5]
    const droppedvalue = _.drop(array1)
    console.log('dropped value', droppedvalue);
  }

  navigateManager = (e, route) => {
    console.log('route', route);
    switch (e.target.innerHTML || route) {
      case 'About Us':
        this.props.history.push('/about')
        break
      case 'product':
        this.props.history.push('/productDetails')
        break
      default:
    }
  }

  
  render() {
    console.log('😀😀😀😀😀😀😀😀',  this.props.products&&this.props.products.items);
    let newArray  = this.props.products&&this.props.products.items
     _.forEach(newArray, function(value){
        console.log('👿👿👿👿👿👿👿👿 Take', value.avatar_url);
      });

  
    const { startSpinner } = this.props;
    return (
      <div>
        { startSpinner ? <Spinner/>:
        <PizzaShoppieComponent {...testdata}/>}
        {/* <InputTextComponent/> */}
        {/* <Tabs>
        <Tab label="Tab1" className={styles}>
          <h2>Tab Content One</h2>
        </Tab>
        <Tab label="Tab2">
          <h2>Tab Content Two</h2>
        </Tab>
        <Tab label="Tab3">
          <h2>Tab Content Three</h2>
        </Tab>
      </Tabs>

      <Bar>Helo</Bar> */}
      </div>
    )
  }
}

export const mapStateToProps = state => (console.log('😂', state), {
  userInfo: state.fetchUserDetailsReducer.data,
  products: state.productListReducer.products,
  startSpinner: state.spinnerReducer.startspinner
});


export const mapDispatchToProps = dispatch =>
  bindActionCreators(  
    {
      fetchProductList,
      fetchUserDetails,
    }, 
    dispatch,
  );

export default connect(
  mapStateToProps, mapDispatchToProps,
)(App);
