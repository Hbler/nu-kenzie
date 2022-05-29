import { AppBtn } from "./GlobalComponents";

export const EventButton = ({
  children,
  onClick,
  loading,
  btnColor,
  btnSize,
  active,
}) => {
  return (
    <>
      {loading ? (
        <AppBtn btnColor={btnColor} btnSize={btnSize} active={active} disabled>
          Carregando...
        </AppBtn>
      ) : (
        <AppBtn
          btnColor={btnColor}
          btnSize={btnSize}
          active={active}
          onClick={onClick}
        >
          {children}
        </AppBtn>
      )}
    </>
  );
};

export const SubmitButton = ({
  children,
  loading,
  btnColor,
  btnSize,
  active,
}) => {
  return (
    <>
      {loading ? (
        <AppBtn btnColor={btnColor} btnSize={btnSize} active={active} disabled>
          Carregando...
        </AppBtn>
      ) : (
        <AppBtn
          btnColor={btnColor}
          btnSize={btnSize}
          active={active}
          type="submit"
        >
          {children}
        </AppBtn>
      )}
    </>
  );
};

export const LinkButton = ({ children, link, btnColor, btnSize, active }) => {
  return (
    <a href={link}>
      <AppBtn btnColor={btnColor} btnSize={btnSize} active={active}>
        {children}
      </AppBtn>
    </a>
  );
};
