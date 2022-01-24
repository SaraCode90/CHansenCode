import css from './Post.module.scss';

import { useDates } from 'lib';

export const Post = ({ postData, scope, ...props }) => {
  const { y } = useDates();
  //
  const data = postData;

  // relative max (100% width)
  let scopeYears = scope;
  let scopeMonths = scopeYears * 12;

  //from (ex. 2018-07)
  let fromTime = data.from.split('-');
  let fromYear = parseInt(fromTime[0]);
  let fromMonth = parseInt(fromTime[1]);

  //to (ex. 2019-03)
  let endTime = data.to.split('-');
  let endYear = parseInt(endTime[0]);
  let endMonth = parseInt(endTime[1]);

  //Width calculation of 'Post' relative to 'scope'
  let totalMonths = (endYear - fromYear) * 12 + (endMonth - fromMonth);
  let percentageOfScope = Math.round((totalMonths * 100) / scopeMonths);
  //#endregion

  //offset right calculation of 'Post' relative to 'today's date' within 'scope'
  let endMonthsAgo = y * 12 - endYear * 12 - endMonth + 12;
  let relativeToScope = (endMonthsAgo * 100) / scopeMonths;

  const propStyle = {
    width: `${percentageOfScope}%`,
    right: `${relativeToScope}%`,
  };

  return (
    postData && (
      <>
        <div className={css.post} style={propStyle} {...props}>
          <h6>{data.short}</h6>
        </div>
      </>
    )
  );
};
