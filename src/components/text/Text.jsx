// import css from "./Text.module.css"
// import clsx from "clsx"

import { Header } from "./Text.styled"
// ------Module css-----

// const Text = ({ children }) => {
//    console.log("css", css)
//    return (
//       <>
//          <h5 className={css["title__name"]}>{children}</h5>
//          <h5 className={css.titleName}>{children}</h5>
//          <h5 className={`${css.titleName} ${css.module}`}>{children}</h5>
//       </>
//    )
// }

// -------- change class with condition isOnline or isOffline ----------------------

// const Text = ({ children, isOnline }) => {
//    console.log("css", css)
//    return (
//       <>
//          <h5
//             className={
//                isOnline
//                   ? `${css.titleName} ${css.online}`
//                   : `${css.titleName} ${css.offline} `
//             }
//          >
//             {children}
//          </h5>
//       </>
//    )
// }

// ------clsx-----

// const Text = ({ children, isOnline }) => {
//    console.log("css", css)
//    return (
//       //   <h5 className={clsx(css.titleName, isOnline && css.online)}>
//       //      {children}
//       //    </h5>

//       <h5
//          className={clsx(css.titleName, {
//             [css.online]: isOnline,
//          })}
//       >
//          {children}
//       </h5>
//    )
// }

// ------------ css-in-JS -------------------------

const Text = ({ children, isOnline }) => {
   return <Header isOn={isOnline}>{children}</Header>
}

export default Text
