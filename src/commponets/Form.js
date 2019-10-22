import React from 'react';

const API_KEY = '667876841bb6d3859149430f73f5b62a';

class  Form  extends React.Component {

    getWeather = async (event) => {
        event.preventDefault();

        const getCity = event.target.city.value;

        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${API_KEY }&units=metric`);

        const data = await api_url.json();

        console.log(data);
    };

    render() {
        return(
            <form onSubmit={this.getWeather}>
                <input type="text" name="city" placeholder="Ведите город"/>
                <button>submit</button>
            </form>
        );
    }
}
export default Form;