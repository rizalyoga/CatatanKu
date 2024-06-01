declare module "react-quill" {
  import { ComponentType } from "react";

  interface ReactQuillProps {
    // value: string;
    // onChange: (content: string) => void;
    // className: string;
    // tambahkan properti lain yang diperlukan dari dokumentasi React Quill
    bounds?: string | HTMLElement;
    children?: React.ReactElement<any>;
    className?: string;
    defaultValue?: Value;
    formats?: string[];
    id?: string;
    modules?: StringMap;
    onChange?(
      value: string,
      delta: DeltaStatic,
      source: Sources,
      editor: UnprivilegedEditor
    ): void;
    onChangeSelection?(
      selection: Range,
      source: Sources,
      editor: UnprivilegedEditor
    ): void;
    onFocus?(
      selection: Range,
      source: Sources,
      editor: UnprivilegedEditor
    ): void;
    onBlur?(
      previousSelection: Range,
      source: Sources,
      editor: UnprivilegedEditor
    ): void;
    onKeyDown?: React.EventHandler<any>;
    onKeyPress?: React.EventHandler<any>;
    onKeyUp?: React.EventHandler<any>;
    placeholder?: string;
    preserveWhitespace?: boolean;
    readOnly?: boolean;
    scrollingContainer?: string | HTMLElement;
    style?: React.CSSProperties;
    tabIndex?: number;
    theme?: string;
    value?: Value;
  }

  const ReactQuill: ComponentType<ReactQuillProps>;
  export default ReactQuill;
}
