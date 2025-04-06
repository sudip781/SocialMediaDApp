// import React from "react";

// import StoryAds from "../../../Ads/storyAds.json";

// const Story = () => {
//   return (
//     <div class="main-content right-chat-active">
//       <div class="middle-sidebar-bottom">
//         <div class="middle-sidebar-left pe-0">
//           <div class="row">
//             <div class="col-xl-12">
//               <div class="row ps-2 pe-1">
//                 {StoryAds.map((story, index) => (
//                   <div class="col-md-3 col-xss-6 pe-2 ps-2">
//                     <div class="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3">
//                       <video
//                         autoPlay
//                         loop
//                         controls
//                         src={story.video}
//                         class="float-right w-100"
//                       ></video>
//                       <div class="card-body d-block w-100 position-absolute bottom-0 text-center">
//                         <figure class="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
//                           <img
//                             src={story.brand}
//                             alt="image"
//                             class="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
//                           />
//                         </figure>
//                         <div class="clearfix"></div>
//                         <h4 class="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
//                           {story.name}
//                         </h4>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Story;


import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import StoryAds from "../../../Ads/storyAds.json";

const Story = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showViewer, setShowViewer] = useState(false);

  useEffect(() => {
    let timer;
    if (showViewer && activeIndex !== null) {
      timer = setTimeout(() => {
        if (activeIndex < StoryAds.length - 1) {
          setActiveIndex((prev) => prev + 1);
        } else {
          setShowViewer(false);
          setActiveIndex(null);
        }
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [activeIndex, showViewer]);

  const openViewer = (index) => {
    setActiveIndex(index);
    setShowViewer(true);
  };

  const closeViewer = () => {
    setShowViewer(false);
    setActiveIndex(null);
  };

  const nextStory = () => {
    if (activeIndex < StoryAds.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else {
      closeViewer();
    }
  };

  const prevStory = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextStory(),
    onSwipedRight: () => prevStory(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0">
            <div className="row">
              <div className="col-xl-12">
                <div className="row ps-2 pe-1">
                  {StoryAds.map((story, index) => (
                    <div
                      className="col-md-3 col-xss-6 pe-2 ps-2"
                      key={index}
                      onClick={() => openViewer(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3">
                        <video
                          autoPlay
                          loop
                          muted
                          src={story.video}
                          className="float-right w-100"
                        ></video>
                        <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                          <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                            <img
                              src={story.brand}
                              alt="brand"
                              className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                            />
                          </figure>
                          <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                            {story.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showViewer && activeIndex !== null && (
        <div
          className="story-viewer-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75 z-index-9999"
          {...handlers}
        >
          <div className="story-content position-relative w-75">
            <video
              key={StoryAds[activeIndex].video}
              src={StoryAds[activeIndex].video}
              autoPlay
              controls
              className="w-100 rounded-3"
            ></video>
            <button
              onClick={closeViewer}
              className="position-absolute top-2 end-2 btn btn-light"
            >
              ✕
            </button>
            <button
              onClick={prevStory}
              className="position-absolute top-50 start-0 translate-middle-y btn btn-dark"
            >
              ◀
            </button>
            <button
              onClick={nextStory}
              className="position-absolute top-50 end-0 translate-middle-y btn btn-dark"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Story;
