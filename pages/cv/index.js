import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';

import CvSlideshow from 'standalone/CvSlideshow';
import { NoPid } from 'page-components/cv/NoPid';

import * as api from 'api-lib/dispatch/cv';

export default function CV({ ...props }) {
  //#region loaded
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();
  //#endregion

  const { query } = useRouter();
  const { pid } = query;

  const pidCorrect = useSelector(store => store.cv);

  useEffect(() => {
    if (pid) {
      !pidCorrect && dispatch(api.findOneByWhom(pid)).then(setLoaded(true));
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    loaded && (
      <>
        <div className="view_cv">
          {pidCorrect[0] ? (
            <CvSlideshow
              data={pidCorrect[0]}
              colors={props.colors}
              setColors={props.setColors}
            />
          ) : (
            <NoPid />
          )}
        </div>

        <style jsx>
          {`
            .view_cv {
              height: 100vh;
              width: 1200px;

              margin: 0 auto;

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </>
    )
  );
}
