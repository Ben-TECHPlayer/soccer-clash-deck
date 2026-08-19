import React from 'react';
import ReactDOM from 'react-dom/client';

import "../../../styles/Card.css";

function Brazil(){
    return(
        <div className="item-container">
            <div className="card">
                {/* <img src={`${process.env.PUBLIC_URL}/assets/teams-character/brazil-team.svg`} alt="Brazil" /> */}
                <img src={`${process.env.PUBLIC_URL}/assets/teams-character/osaka.svg`} alt="Portugal" />
                <p>Brazil</p>
                <div className="infos-card">
                    <p>Compétences : </p>
                    <ul>
                        <li>Powerful shot</li>
                        <li>Ricochet</li>
                    </ul>
                    <div className="nationality">
                        {/* <img src={`${process.env.PUBLIC_URL}/assets/teams-flag/brazil-team.svg`} alt="Brazil" /> */}
                        <img className="flag" src={`${process.env.PUBLIC_URL}/assets/teams-flag/japan.svg`} alt="Japan"/>
                        <p>Brazil</p>
                    </div>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="brazil">
                        <caption>Upgrade Table</caption>
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
                                <td>20</td>
                                <td>30</td>
                                <td>50</td>
                                <td>85</td>
                                <td>140</td>
                                <td>220</td>
                                <td>355</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td>220</td>
                                <td>390</td>
                                <td>830</td>
                                <td>1540</td>
                                <td>3190</td>
                                <td>5270</td>
                                <td>8780</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="brazil">
                        <caption>Skills Table</caption>
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
                                <td>Strike Power</td>
                                <td>36</td>
                                <td>40</td>
                                <td>43</td>
                                <td>47</td>
                                <td>50</td>
                                <td>54</td>
                                <td>58</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>72</td>
                            </tr>
                            <tr>
                                <td>Agility</td>
                                <td>30</td>
                                <td>33</td>
                                <td>36</td>
                                <td>39</td>
                                <td>42</td>
                                <td>45</td>
                                <td>48</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>60</td>
                            </tr>
                            <tr>
                                <td>Volley</td>
                                <td>35</td>
                                <td>38</td>
                                <td>42</td>
                                <td>45</td>
                                <td>49</td>
                                <td>53</td>
                                <td>56</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <td>Stamina</td>
                                <td>31</td>
                                <td>34</td>
                                <td>37</td>
                                <td>40</td>
                                <td>43</td>
                                <td>46</td>
                                <td>49</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>61</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
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

export default Brazil;