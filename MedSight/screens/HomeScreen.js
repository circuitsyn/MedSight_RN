import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default className HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
    return (

        <div classNameName="homeWrapper">
            {/* Main Logo Section */}
            <div className="container mt-0 mb-5">
                <div className="row">
                    <img className="mainImgArea mb-2" src="/assets/images/MedSight Banner - Tighter Crop.png" alt="MedSight" />
                </div>    
            </div>
    
    
            {/* Health Tip Section */}
            <div className="container healthFactArea mt-2 mb-5">
                <div className="row mt-2 mb-2 d-flex justify-content-center">
                    <h3><strong>Quote of the Day</strong></h3>
                </div>
                <div className="row mt-2 mb-2 d-flex justify-content-center">
                    <h4 id="healthFact"><strong></strong> </h4>
                </div>
                <div className="row mt-2 mb-2 d-flex justify-content-center">
                    <h5 id="quoteAuthor"></h5>
                </div>    
            </div>
    
            {/* Main Survey Question Area */}
            <div className="container mainSurveyArea mt-2 mb-2">
    
                {/* Intro instructions */}
                <div className="row">
                    <h2 className="d-flex align-items-center mt-4 titleFont">
                        Make sure to fill your card out to completion so we can get you the best results over time!
                    </h2>
                </div>
                <hr />
            
                {/* Questions Pain Location Section Start */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Pain Selection Location:</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>Click to select type and pain location.</p>   
                        </div>
                    </div>        
                    
                    <div className="row mt-2 mb-2 d-flex justify-content-center">
                        <div className="row mt-2 mb-4">

                            {/* Muscular Pain: */}
                            <div className="col-md-4">
                                <select id="muscularQ" className="custom-select" style="width: 220px">
                                    <option value="none">Muscular Pain Locations</option>
                                    <option value="Ankle">Muscular Pain: Ankle</option>
                                    <option value="Back">Muscular Pain: Back</option>
                                    <option value="Bicep">Muscular Pain: Bicep</option>
                                    <option value="Calf">Muscular Pain: Calf</option>
                                    <option value="Chest">Muscular Pain: Chest</option>
                                    <option value="Elbow">Muscular Pain: Elbow </option>
                                    <option value="Face">Muscular Pain: Face</option>
                                    <option value="Feet">Muscular Pain: Feet</option>
                                    <option value="Fingers">Muscular Pain: Fingers</option>
                                    <option value="Hands">Muscular Pain: Hands</option>
                                    <option value="Head">Muscular Pain: Head</option>
                                    <option value="Knuckles">Muscular Pain: Knuckles</option>
                                    <option value="Neck">Muscular Pain: Neck</option>
                                    <option value="Nose">Muscular Pain: Nose</option>
                                    <option value="Shin">Muscular Pain: Shin</option>
                                    <option value="Thigh">Muscular Pain: Thigh</option>
                                    <option value="Tricep">Muscular Pain: Tricep</option>
                                </select>
                            </div>
            
                            {/* Skeletal Pain--> */}
                            <div className="col-md-4">
                                <select id="skeletalQ" className="custom-select" style="width: 220px">
                                    <option value="none">Skeletal Pain Locations</option>
                                    <option value="Ankle">Skeletal Pain: Ankle</option>
                                    <option value="Back">Skeletal Pain: Back</option>
                                    <option value="Bicep">Skeletal Pain: Bicep</option>
                                    <option value="Calf">Skeletal Pain: Calf</option>
                                    <option value="Chest">Skeletal Pain: Chest</option>
                                    <option value="Elbow">Skeletal Pain: Elbow </option>
                                    <option value="Face">Skeletal Pain: Face</option>
                                    <option value="Feet">Skeletal Pain: Feet</option>
                                    <option value="Fingers">Skeletal Pain: Fingers</option>
                                    <option value="Hands">Skeletal Pain: Hands</option>
                                    <option value="Head">Skeletal Pain: Head</option>
                                    <option value="Knuckles">Skeletal Pain: Knuckles</option>
                                    <option value="Neck">Skeletal Pain: Neck</option>
                                    <option value="Nose">Skeletal Pain: Nose</option>
                                    <option value="Shin">Skeletal Pain: Shin</option>
                                    <option value="Thigh">Skeletal Pain: Thigh</option>
                                    <option value="Tricep">Skeletal Pain: Tricep</option>
                                </select>
                            </div>
        
                            {/* Epidermis Pain--> */}
                            <div className="col-md-4">            
                                <select id="epidermisQ" className="custom-select" style="width: 220px">
                                    <option value="none">Epidermis Pain Locations</option>
                                    <option value="Ankle">Epidermis Pain: Ankle</option>
                                    <option value="Back">Epidermis Pain: Back</option>
                                    <option value="Bicep">Epidermis Pain: Bicep</option>
                                    <option value="Calf">Epidermis Pain: Calf</option>
                                    <option value="Chest">Epidermis Pain: Chest</option>
                                    <option value="Elbow">Epidermis Pain: Elbow </option>
                                    <option value="Face">Epidermis Pain: Face</option>
                                    <option value="Feet">Epidermis Pain: Feet</option>
                                    <option value="Fingers">Epidermis Pain: Fingers</option>
                                    <option value="Hands">Epidermis Pain: Hands</option>
                                    <option value="Head">Epidermis Pain: Head</option>
                                    <option value="Knuckles">Epidermis Pain: Knuckles</option>
                                    <option value="Neck">Epidermis Pain: Neck</option>
                                    <option value="Nose">Epidermis Pain: Nose</option>
                                    <option value="Shin">Epidermis Pain: Shin</option>
                                    <option value="Thigh">Epidermis Pain: Thigh</option>
                                    <option value="Tricep">Epidermis Pain: Tricep</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Allergy Trigger Section */}
                <div className="container">
                    <div className="row">         
                        <h4>Allergy Triggers:</h4>  
                    </div>
                    <div className="row">    
                        <p>Click to select any common allergy trigger foods you may have consumed.</p>   
                    </div>
                
                    <section>	
                        <div className="quizimgblock">
                            <div className="container">
                                <div className="row mt-2 mb-4 d-flex justify-content-center">
            
                                    {/* Dairy Question Checkbox */}
                                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                        <div id="dairyCheck" value="0" href="#" className="quiz-answer">
                                            <img className="check" src="assets/images/checkmark2trans.png" alt="check" />
                                            <img className="allergyIcons" src="assets/images/cowIcon.png" alt="dairy icon" />
                                        </div>
                                    </div>

                                    {/* Eggs Question Checkbox */}
                                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                        <div id="eggCheck" value="0" href="#" className="quiz-answer">
                                            <img className="check" src="assets/images/checkmark2trans.png" alt="check" />
                                            <img className="allergyIcons" src="assets/images/eggs.png" alt="egg icon" />
                                        </div>
                                    </div>

                                    {/* Seafood Question Checkbox */}
                                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                        <div id="seafoodCheck" value="0" href="#" className="quiz-answer">
                                            <img className="check" src="assets/images/checkmark2trans.png" alt="check" />
                                            <img className="allergyIcons" src="assets/images/fish.png" alt="seafood icon" />
                                        </div>
                                    </div>

                                    {/* Soy Question Checkbox */}
                                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                        <div id="soyCheck" value="0" href="#" className="quiz-answer">
                                            <img className="check" src="assets/images/checkmark2trans.png" alt="check" />
                                            <img className="allergyIcons" src="assets/images/soy.png" alt="soy icon" />
                                        </div>
                                    </div>

                                    {/* Nuts Question Checkbox */}
                                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                        <div id="nutsCheck" value="0" href="#" className="quiz-answer">
                                            <img className="check" src="assets/images/checkmark2trans.png" alt="check" />
                                            <img className="allergyIcons" src="assets/images/nutsIcon.png" alt="nuts icon" />
                                        </div>
                                    </div>

                                    {/* Wheat Question Checkbox */}
                                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                        <div id="wheatCheck" value="0" href="#" className="quiz-answer">
                                            <img className="check" src="assets/images/checkmark2trans.png" alt="check" />
                                            <img className="allergyIcons" src="assets/images/wheatIcon.png" alt="wheat icon" />
                                        </div>
                                    </div>

                                    {/* Sweets Question Checkbox */}
                                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                        <div id="sweetsCheck" value="0" href="#" className="quiz-answer">
                                            <img className="check" src="assets/images/checkmark2trans.png" alt="check" />
                                            <img className="allergyIcons" src="assets/images/sweets.png" alt="sweetsCheck" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        
                {/* Discomfort Sliders */}
                {/* Stress Level Slider */}
                <hr />
                <div className="container">
                    <div className="row mb-4 mt-3">
                        <h4>Stress Level Slider</h4>
                        <p>Please touch or click and hold the heart on the scale and drag it toward green for less stress and right for more stress that you are experiencing below:</p>
                        <div className="slidecontainer">
                            <input type="range" min="0" max="10" value="0" className="slider" id="stressRange" data-slider-id="stressRangeId" />
                        </div>
                    </div>
                    {/* Intensity Level Slider */}
                    <div className="row mb-3 mt-2">
                        <h4>Symptom Intensity Level Slider</h4>
                        <p>Please touch or click and hold the heart on the scale and drag it toward green for less intensity and right for more intensity of the symptom that you are experiencing below:</p>
                        <div className="slidecontainer">
                            <input type="range" min="0" max="10" value="0" className="slider" id="symptomRange" data-slider-id="intensityRangeId" />
                        </div>
                    </div>
                </div>
        
                <hr />

                {/* Table for API and auto data */}
                <div className="autoTable">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col" className="bg-warning">Automatic Data</th>
                            <td className="bg-warning"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">Location</th>
                            <td id="autoLocation"></td>
                            </tr>
                            <tr>
                            <th scope="row">Humidity</th>
                            <td id="autoHumidity"></td>
                            </tr>
                            <tr>
                            <th scope="row">Pollen</th>
                            <td id="autoPollen"></td>
                            </tr>
                            <tr>
                            <th scope="row">Air Quality</th>
                            <td id="autoPollution"></td>
                            </tr>
                            <tr>
                            <th scope="row">Sampled Data Time 'GMT'</th>
                            <td id="autoTime"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        
                {/* Notes Input Area */}
                <div className="container">
                    <div className="row mt-4 mb-4">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text font-weight-bold">Notes Section:</span>
                            </div>
                            <textarea id="notesInput" className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                </div>
        
                {/* Submit Button */}
                <div className="row container">
                    <input id="submit" className="btn btn-warning pt-3 pb-3 pl-5 pr-5 font-weight-bold " type="submit" value="Submit New Card" />
                </div>
                <hr />
            </div>

            {/* Form Validation Modal Start */}
            <div className="modal fade" id="validator" tabindex="-1" role="dialog" >
                <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title"><strong>Selection Error</strong></h2>
                            <h4 className="modal-title" id="validatorLabel"></h4>
                        </div>
                        <div className="modal-body modal-dialog-centered">
                            <h4>Please select a pain area to submit.</h4>
                            <button type="button" className="btn btn-outline-warning btn-lg" data-dismiss="modal">Dismiss</button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        );
    }
}
