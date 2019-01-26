import React,{Component} from 'react';
import axios from 'axios';
import VisitorNumbers from '../components/VisitorNumbers';
class Dashboard extends Component 
{
    constructor(props)
    {
        super();

        this.state = {
            resorts:[],
        }
    }

    componentDidMount()
    {
     axios.get('http://localhost:3000/resort-visitor-data.json')
      .then((response) => {
         console.log(response.data.resorts);
         this.setState({
             resorts:response.data.resorts
         })
      }).catch((error) => {
         console.log(error);
      });
    }

   
    render()
    {

          const resorts = this.state.resorts.length ? (this.state.resorts.map((resort, i) => {
            return (
                <div className="col-md-6 col-lg-4" key={resort.name}>
                    <VisitorNumbers name={resort.name} visitors={resort.visitorsOnSite} animationOffSet={i * 0.2} />
                </div>
            )

        })) : (<div> Loading data</div>);


        return (

            <div className="dashboard">
                <header className="dashboard-header">
                <div className="container">
                    <div className="row">
                     <h2 className="heading-primary">MegaLand Dashboard</h2>
                    </div>
                </div>
               </header>
              <section className="section-visitor-overview container ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h2 className="heading-secondary">Visitor Overview</h2>
                        </div>
                    </div>
                    
                    <div className="row">
                        {resorts}
                    </div>
                </div>
              </section>
               
            </div>
        )
    }

} 

export default Dashboard;