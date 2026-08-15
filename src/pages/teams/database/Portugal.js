import React from 'react';
import ReactDOM from 'react-dom/client';

function Portugal(){
    return(
        <div className="item-container">
            <div className="card">
                {/* <img src={`${process.env.PUBLIC_URL}/assets/teams-character/portugal-team.svg`} alt="Portugal" /> */}
                <img src={`${process.env.PUBLIC_URL}/assets/teams-character/osaka.svg`} alt="Portugal" />
                <p>Portugal</p>
                <div className="infos-card">
                    <p>Compétences : </p>
                    <p>Powerful shot</p>
                    <p>Hidden</p>
                    <div className="nationality">
                        {/* <img src={`${process.env.PUBLIC_URL}/assets/teams-flag/portugal-team.svg`} alt="Portugal" /> */}
                        <img className="flag" src={`${process.env.PUBLIC_URL}/assets/teams-flag/japan.svg`} alt="Japan"/>
                        <p>Portugal</p>
                    </div>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="portugal">
                        <caption>Potugal's Upgrade Table</caption>
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Up Cards</td>
                                <td></td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>8</td>
                                <td>10</td>
                                <td>20</td>
                                <td>40</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td>6K</td>
                                <td>11K</td>
                                <td>36K</td>
                                <td>52K</td>
                                <td>140K</td>
                                <td>180K</td>
                                <td>440K</td>
                                <td>520K</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="osaka">
                        <caption>Osaka's Skills Table</caption>
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Agility</td>
                                <td>4</td>
                                <td>6</td>
                                <td>7</td>
                                <td>9</td>
                                <td>10</td>
                                <td>12</td>
                                <td>14</td>
                                <td>15</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Stamina</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Serve</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Volley</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th>28</th>
                                <th>35</th>
                                <th>42</th>
                                <th>50</th>
                                <th>55</th>
                                <th>63</th>
                                <th>71</th>
                                <th>78</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Portugal;