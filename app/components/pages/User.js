import React from 'react';
import { Link } from 'react-router-dom';
import { getFoodData } from '../../helpers/chucknorris-api';
import { PageWrapper } from '../../constants/constants';
import PrimaryMenu from '../menus/PrimaryMenu';

export default class User extends React.Component {

  state = {
    jokes: []
  };

  componentDidMount() {
    this.getFoodJokes();
  }

  getFoodJokes = () => {
    getFoodData().then((jokes) => {
      this.setState({ jokes });
    });
  };

  render() {

    const { jokes } = this.state;

    return (
      <PageWrapper>
        <PrimaryMenu />
        <div>
          <Link to="/">home</Link>
          <h3 className="text-center">Chuck Norris Food Jokes</h3>
          <hr/>

          {jokes.map((joke, index) => (
            <div className="col-sm-6" key={index}>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title"><span className="btn">#{joke.id}</span></h3>
                </div>
                <div className="panel-body">
                  <p> {joke.joke} </p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-sm-12">
            <div className="jumbotron text-center">
              <h2>Get Access to Celebrity Jokes By Logging In</h2>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="jumbotron text-center">
              <h2>View Celebrity Jokes</h2>
              <Link className="btn btn-lg btn-success" to="/special"> Celebrity Jokes </Link>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
