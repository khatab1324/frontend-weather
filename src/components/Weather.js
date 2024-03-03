import React from "react";

const Weather = (props) => {
  // is auth ture contuninue
  //false navigate ()
  return (
    <body>
      <div class="v1_2">
        <div class="v1_4">
          <div class="v2_188">
            <span class="v3_204">Sunrise & Sunset</span>
            <div class="v3_205"></div>

            <span class="v3_206">Sunrise</span>
            <span class="sunrise">{props.sunrise}</span>
            <span class="v3_209">Sunset</span>
            <div class="v3_208"></div>
            <span class="sunset">{props.sunset}</span>
          </div>
          <span class="v2_191">Today’s Highlights</span>
          <div class="v3_194">
            <div class="v3_214"></div>
            <span class="v3_215">Wind</span>
            <span class="wind">{props.wind_kph} kph</span>
          </div>
          <div class="v3_195">
            <div class="v5_217"></div>
            <span class="v5_218">Fahrenheit</span>
            <span id="fahrenheit">
              {props.temp_f}
              <sup>o</sup>F
            </span>
          </div>
          <div class="v3_196">
            <div class="v5_219"></div>
            <span class="v5_220">Humidity</span>
            <span id="humidity">{props.humidity}%</span>
          </div>
          <div class="v3_200">
            <div class="v5_221"></div>
            <span class="v5_222">Pressure</span>
            <span id="pressure">{props.pressure}hPa</span>
          </div>
          <div class="v3_201">
            <div class="v5_223"></div>
            <span class="v5_224">Visibility</span>
            <span id="visibility">{props.visibility}km</span>
          </div>
          <div class="v3_202">
            <div class="v5_225"></div>
            <span class="v5_226">Feels Like</span>
            <span id="feels">
              {props.feelslike}
              <sup>o</sup>c
            </span>
          </div>
        </div>
        <div class="v1_8">
          <span class="v2_192">Now</span>
          <img class="i1" src={props.conditionImg} />
          <div class="one">
            <span id="xx">
              {props.temp}
              <sup>o</sup>c
            </span>
            <p>{props.condition}</p>
            <p>__________________________________________</p>
            <p>
              {props.day},{props.date}
            </p>
            <p>
              {props.city},{props.country}
            </p>
          </div>
          <div class="name"></div>
        </div>
        <div class="v2_88">
          <div class="two">
            <img id="i2" src={props.conditionImgOne} />
            <span id="twoA">
              {props.tempOne}
              <sup>o</sup>c
            </span>{" "}
            <span id="twoB">
              {props.dayOne},{props.dateOne}
            </span>
            <br />
            <img id="i2" src={props.conditionImgTwo} />
            <span id="twoA">
              {props.tempTwo}
              <sup>o</sup>c
            </span>{" "}
            <span id="twoB">
              {props.dayTwo},{props.dateTwo}
            </span>
            <br />
            <img id="i2" src={props.conditionImgThree} />
            <span id="twoA">
              {props.tempThree}
              <sup>o</sup>c{" "}
            </span>{" "}
            <span id="twoB">
              {props.dayThree},{props.dateThree}
            </span>
            <br />
            <img id="i2" src={props.conditionImgFour} />
            <span id="twoA">
              {props.tempFour}
              <sup>o</sup>c{" "}
            </span>{" "}
            <span id="twoB">
              {props.dayFour},{props.dateFour}
            </span>
            <br />
            <img id="i2" src={props.conditionImgFive} />
            <span id="twoA">
              {props.tempFive}
              <sup>o</sup>c{" "}
            </span>{" "}
            <span id="twoB">
              {props.dayFive},{props.dateFive}
            </span>
            <br />
          </div>
        </div>
        <span class="v1_67">5 Days Forecast</span>
        <div class="v2_69"></div>
        <div class="v2_71">
          <p class="time">12AM</p>
          <img class="timeImg" src={props.hourImg1} />
          <p class="temp">
            {props.hour1}
            <sup>o</sup>c
          </p>
        </div>
        <div class="v2_181">
          <p class="time">4AM</p>
          <img class="timeImg" src={props.hourImg2} />
          <p class="temp">
            {props.hour2}
            <sup>o</sup>c
          </p>
        </div>
        <div class="v2_182">
          <p class="time">8AM</p>
          <img class="timeImg" src={props.hourImg3} />
          <p class="temp">
            {props.hour3}
            <sup>o</sup>c
          </p>
        </div>
        <div class="v2_183">
          <p class="time">12PM</p>
          <img class="timeImg" src={props.hourImg4} />
          <p class="temp">
            {props.hour4}
            <sup>o</sup>c
          </p>
        </div>
        <div class="v2_184">
          <p class="time">4PM</p>
          <img class="timeImg" src={props.hourImg5} />
          <p class="temp">
            {props.hour5}
            <sup>o</sup>c
          </p>
        </div>
        <div class="v2_185">
          <p class="time">8PM</p>
          <img class="timeImg" src={props.hourImg6} />
          <p class="temp">
            {props.hour6}
            <sup>o</sup>c
          </p>
        </div>
        <span class="v2_186">Today at</span>
      </div>
    </body>
  );
};

export default Weather;
