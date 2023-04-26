import React, { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  // if (typeof duration !== "number" || typeof delay !== "number") {
  //   return;
  // }
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s easy-in-out ${delay}s`
      current.style.opacity = 1;
    }
  }, [])
  return { ref: element, style: {opacity: 0}};
}
// 리엑트 18부터는 실행이 되지 않음
const UseFadeInPrac = () => {
  const fadeInH1 = useFadeIn(2, 3);
  const fadeInP = useFadeIn(3, 7);
  return (
    <div>
      <h1>10. useFadeIn</h1>
      <h2 {...fadeInH1}>Hello</h2>
      <p { ...fadeInP}>delay more than Hello</p>
    </div>
  )
}

export default UseFadeInPrac;
