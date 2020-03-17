import React from 'react'
import PropTypes from 'prop-types'

const Description = ({
  outline,
  outlineEn,
  titleOrganizer,
  organizer,
  organizerEn,
  titleDate,
  date,
  dateEn,
  titleVenue,
  venue,
  venueEn,
  titleParticipationFee,
  participationFee,
  participationFeeEn,
  titleHashTag,
  hashtag,
  hashtagEn,
}) => (
    <div>
        <div>
            <span>{outline}</span>
            <br />
            <span>{outlineEn}</span>
        </div>
        <div>
            <dt>{titleOrganizer}</dt>
            <dd>{organizer} / {organizerEn}</dd>
            <dt>{titleDate}</dt>
            <dd>{date} / {dateEn}</dd>
            <dt>{titleVenue}</dt>
            <dd>{venue}</dd>
            <dd>{venueEn}</dd>
            <dt>{titleParticipationFee}</dt>
            <dd>{participationFee} / {participationFeeEn}</dd>
            <dt>{titleHashTag} </dt>
            <dd><a href="https://twitter.com/search?q=%23jjug_ccc" target="blank">#jjug_ccc</a>（{hashtag} / {hashtagEn}）</dd>
        </div>
    </div>
);

Description.propTypes = {
    outline: PropTypes.string,
    outlineEn: PropTypes.string,
    titleOrganizer: PropTypes.string,
    organizer: PropTypes.string,
    organizerEn: PropTypes.string,
    titleDate: PropTypes.string,
    date: PropTypes.string,
    dateEn: PropTypes.string,
    titleVenue: PropTypes.string,
    venue: PropTypes.string,
    venueEn: PropTypes.string,
    titleParticipationFee: PropTypes.string,
    participationFee: PropTypes.string,
    participationFeeEn: PropTypes.string,
    titleHashTag: PropTypes.string,
    hashtag: PropTypes.string,
    hashtagEn: PropTypes.string,
};

export default Description
