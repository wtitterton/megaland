import React,{Component} from 'react';
import CountUp from 'react-countup';
class VisitorNumbers extends Component
{
    constructor(props)
    {
        super();
    }
     calculatePercentageIncrease(now,yesterday)
    {
        //get diff
        var diff = now - yesterday;
        var increase = (diff / yesterday) * 100;
        return increase.toFixed(2);
    }

    calculatePercentageDecrease(now,yesterday)
    {
         var diff = now - yesterday;
         var decrease = (diff / yesterday) * 100;
         return Math.abs(decrease.toFixed(2));
    }

    handlePercentageCaculation(numberOfVisitors)
    {
        var results = null;
        var increase = false;
        var yesterday = numberOfVisitors.yesterday;
        var now = numberOfVisitors.now;
        
        if(now > yesterday)
        {
          results = this.calculatePercentageIncrease(now,yesterday);
          increase = true;
        }
        else
        {
            
            results = this.calculatePercentageDecrease(now,yesterday);
            increase = false;
        }
       
       return {
           results:results,
           increase:increase
       }
       
    }


    render() {
        
       const percentage = this.handlePercentageCaculation(this.props.visitors);
       console.log(percentage.results);
        return (
            <div className="visitor-numbers fade-up">
                <div className="visitor-numbers__details">
                    <div className="row">
                        <div className=" col-2 col-sm-2 col-md-2 d-flex justify-content-center justify-content-sm-start">
                             <i className="fas fa-user icon--md"></i>
                        </div>
                         <div className=" col-10 col-sm-10 col-md-10">
                                <h3 className="visitor-numbers__title">{this.props.name}</h3>
                                <CountUp start={0}  end={this.props.visitors.now} separator=","  className="visitor-numbers__figure" duration={0.5} delay={this.props.animationOffSet} />
                                {percentage.increase ? <i className="fas fa-arrow-up icon--green icon--md " ></i> : 
                            <i className="fas fa-arrow-down  icon--red  icon--md" ></i>}
                        </div>
                    </div>
                    
                   
                </div>
                <div className="visitor-numbers__percentage-figures">
                    {percentage.increase ? <i className="fas fa-arrow-up icon--green icon--sm " ></i> : 
                    <i className="fas fa-arrow-down icon--red icon--sm  " ></i>}
                    <span className="visitor-numbers__percentage-figure">{`${percentage.results}%`}</span>
                </div>
            </div>
        )
    }
}


export default VisitorNumbers;