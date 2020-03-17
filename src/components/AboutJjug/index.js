import React from 'react'
import PropTypes from 'prop-types'

const AboutJjug = ({
  outline,
  outlineEn,
  titleNightSeminar,
  nightSeminar,
  nightSeminarEn,
  titleJjugCcc,
  jjugCcc,
  jjugCccEn,
  titleInstructorDispatch,
  instructorDispatch,
  instructorDispatchEn,
  titleInternationalConference,
  internationalConference,
  internationalConferenceEn,
}) => (
  <div>
    <div>
      <span>{outline}</span>
      <br/>
      <span>{outlineEn}</span>
      <br/>
    </div>
    <dl>
      <dt>{titleNightSeminar}</dt>
      <dd>{nightSeminar} / {nightSeminarEn}</dd>
      <dt>{titleJjugCcc}</dt>
      <dd>{jjugCcc} / {jjugCccEn}</dd>
      <dt>{titleInstructorDispatch}</dt>
      <dd>{instructorDispatch} / {instructorDispatchEn}</dd>
      <dt>{titleInternationalConference}</dt>
      <dd>{internationalConference} / {internationalConferenceEn}</dd>
    </dl>
    <div>
      <p>
        詳しくはJJUGの<a href="http://www.java-users.jp/">オフィシャルサイト</a>や<a href="https://jjug.doorkeeper.jp/">コミュニティページ（DoorKeeper）</a>を確認してください。 /
        Please check JJUG <a href="http://www.java-users.jp/">official website</a> and <a href="https://jjug.doorkeeper.jp/">community page (DoorKeeper)</a> for more detail information.
      </p>
    </div>
  </div>
);

AboutJjug.propTypes = {
  outline: PropTypes.string,
  outlineEn: PropTypes.string,
  titleNightSeminar: PropTypes.string,
  nightSeminar: PropTypes.string,
  nightSeminarEn: PropTypes.string,
  titleJjugCcc: PropTypes.string,
  jjugCcc: PropTypes.string,
  jjugCccEn: PropTypes.string,
  titleInstructorDispatch: PropTypes.string,
  instructorDispatch: PropTypes.string,
  instructorDispatchEn: PropTypes.string,
  titleInternationalConference: PropTypes.string,
  internationalConference: PropTypes.string,
  internationalConferenceEn: PropTypes.string,
};

export default AboutJjug
