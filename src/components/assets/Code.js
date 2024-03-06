import { PrismLight as SyntaxHighLighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ClipButton from "../ClipButton/ClipButton";
import style from "./style.module.css";
const Code = ({ children, language }) => {
  return (
    <div className={style.Wrapper}>
      <div className={style.CopyButton}>
        <ClipButton text={children} />
      </div>
      <div className={style.SyntaxHighlighterWrapper}>
        <SyntaxHighLighter language={language} style={materialDark}>
          {children}
        </SyntaxHighLighter>
      </div>
    </div>
  );
};
export default Code;
