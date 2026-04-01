import { jsx as e, jsxs as N, Fragment as Re } from "react/jsx-runtime";
import z, { createContext as X, useState as W, useCallback as M, useContext as Q, useId as O, forwardRef as te, useRef as F, useEffect as V, Children as fe, isValidElement as oe, useMemo as ue, cloneElement as je } from "react";
import { createPortal as Oe } from "react-dom";
const we = X({
  theme: "white",
  setTheme: () => {
  }
});
function dn() {
  return Q(we);
}
const Fe = {
  white: "cds--white",
  g10: "cds--g10",
  g90: "cds--g90",
  g100: "cds--g100"
}, fn = z.forwardRef(
  function({ theme: n = "white", children: o }, c) {
    const [t, a] = W(n), s = M((i) => {
      a(i);
    }, []);
    return /* @__PURE__ */ e(we.Provider, { value: { theme: t, setTheme: s }, children: /* @__PURE__ */ e("div", { ref: c, className: Fe[t], children: o }) });
  }
), Ge = {
  primary: "cds--btn--primary",
  secondary: "cds--btn--secondary",
  tertiary: "cds--btn--tertiary",
  ghost: "cds--btn--ghost",
  danger: "cds--btn--danger",
  "danger-tertiary": "cds--btn--danger--tertiary",
  "danger-ghost": "cds--btn--danger--ghost"
}, Ve = ["danger", "danger-tertiary", "danger-ghost"];
function le(...r) {
  return r.filter(Boolean).join(" ");
}
function Ke(r, n, o, c, t, a, s) {
  const i = n === "xl" || n === "2xl" ? n === "xl" ? "cds--btn--xl" : "cds--btn--2xl" : n && !o ? `cds--btn--${n}` : "";
  return le(
    s,
    "cds--btn",
    Ge[r],
    i,
    n ? `cds--layout--size-${n}` : "",
    c ? "cds--btn--disabled" : "",
    o ? "cds--btn--expressive" : "",
    t ? "cds--btn--icon-only" : "",
    t && a && r === "ghost" ? "cds--btn--selected" : ""
  );
}
const un = z.forwardRef(
  function({
    kind: n = "primary",
    size: o,
    type: c = "button",
    disabled: t = !1,
    isExpressive: a = !1,
    isSelected: s = !1,
    hasIconOnly: i = !1,
    renderIcon: f,
    href: b,
    tooltipText: g,
    dangerDescription: h = "Danger",
    className: l,
    children: u,
    "aria-describedby": p,
    "aria-pressed": v,
    "aria-label": m,
    ...y
  }, d) {
    const k = O(), x = Ve.includes(n), _ = Ke(
      n,
      o,
      a,
      t,
      i,
      s,
      l
    ), $ = f ? /* @__PURE__ */ e(f, { className: "cds--btn__icon", "aria-hidden": "true" }) : null, B = x && h ? /* @__PURE__ */ e("span", { id: k, className: "cds--visually-hidden", children: h }) : null, w = [x ? k : "", p].filter(Boolean).join(" ") || void 0, C = le(
      _,
      i && g ? "cds--tooltip__trigger cds--tooltip--a11y" : ""
    ), A = v ?? (i && n === "ghost" ? s : void 0), T = m ?? (i && g ? g : void 0), D = /* @__PURE__ */ N(Re, { children: [
      B,
      u,
      $,
      i && g ? /* @__PURE__ */ e("span", { className: "cds--assistive-text", role: "tooltip", children: g }) : null
    ] }), I = !!b && !t;
    let H;
    return I ? H = /* @__PURE__ */ e(
      "a",
      {
        ref: d,
        href: b,
        className: C,
        "aria-describedby": w,
        "aria-pressed": A,
        "aria-label": T,
        ...y,
        children: D
      }
    ) : H = /* @__PURE__ */ e(
      "button",
      {
        ref: d,
        type: c,
        disabled: t,
        className: C,
        "aria-describedby": w,
        "aria-pressed": A,
        "aria-label": T,
        ...y,
        children: D
      }
    ), i && g ? /* @__PURE__ */ e(
      "span",
      {
        className: le(
          "cds--icon-tooltip",
          t ? "cds--icon-tooltip--disabled" : ""
        ),
        children: /* @__PURE__ */ e("div", { className: "cds--tooltip-trigger__wrapper", children: H })
      }
    ) : H;
  }
);
function qe(...r) {
  return r.filter(Boolean).join(" ");
}
const bn = z.forwardRef(
  function({
    as: n,
    className: o,
    children: c,
    disabled: t = !1,
    inline: a = !1,
    visited: s = !1,
    size: i = "md",
    renderIcon: f,
    href: b,
    target: g,
    ...h
  }, l) {
    const u = qe(
      "cds--link",
      o,
      i === "sm" ? "cds--link--sm" : "",
      i === "lg" ? "cds--link--lg" : "",
      t ? "cds--link--disabled" : "",
      s ? "cds--link--visited" : "",
      a ? "cds--link--inline" : ""
    ), p = f ? /* @__PURE__ */ e(f, { className: "cds--link__icon", "aria-hidden": "true" }) : null;
    return t ? /* @__PURE__ */ N(
      "p",
      {
        ref: l,
        className: u,
        ...h,
        children: [
          c,
          p
        ]
      }
    ) : /* @__PURE__ */ N(
      n || "a",
      {
        ref: l,
        className: u,
        href: b,
        target: g,
        ...h,
        children: [
          c,
          p
        ]
      }
    );
  }
);
function Ue(...r) {
  return r.filter(Boolean).join(" ");
}
const Ye = {
  red: "cds--tag--red",
  magenta: "cds--tag--magenta",
  purple: "cds--tag--purple",
  blue: "cds--tag--blue",
  cyan: "cds--tag--cyan",
  teal: "cds--tag--teal",
  green: "cds--tag--green",
  gray: "cds--tag--gray",
  "cool-gray": "cds--tag--cool-gray",
  "warm-gray": "cds--tag--warm-gray",
  "high-contrast": "cds--tag--high-contrast",
  outline: "cds--tag--outline"
};
function Je() {
  return /* @__PURE__ */ e(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 16,
      height: 16,
      viewBox: "0 0 32 32",
      fill: "currentColor",
      focusable: "false",
      "aria-hidden": "true",
      children: /* @__PURE__ */ e("path", { d: "M17.4141 16L24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16z" })
    }
  );
}
const gn = z.forwardRef(function({
  type: n = "gray",
  size: o = "md",
  filter: c = !1,
  disabled: t = !1,
  onClose: a,
  renderIcon: s,
  className: i,
  children: f,
  ...b
}, g) {
  const h = Ue(
    "cds--tag",
    Ye[n],
    o === "sm" ? "cds--tag--sm" : "",
    o === "lg" ? "cds--tag--lg" : "",
    c ? "cds--tag--filter" : "",
    t ? "cds--tag--disabled" : "",
    i
  );
  return /* @__PURE__ */ N(
    "span",
    {
      ref: g,
      className: h,
      "aria-disabled": t || void 0,
      ...b,
      children: [
        s ? /* @__PURE__ */ e("span", { className: "cds--tag__custom-icon", children: /* @__PURE__ */ e(s, { "aria-hidden": "true" }) }) : null,
        /* @__PURE__ */ e("span", { className: "cds--tag__label", children: f }),
        c ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "cds--tag__close-icon",
            "aria-label": "Clear filter",
            disabled: t,
            onClick: a,
            children: /* @__PURE__ */ e(Je, {})
          }
        ) : null
      ]
    }
  );
});
function he(...r) {
  return r.filter(Boolean).join(" ");
}
const mn = z.forwardRef(function({
  active: n = !0,
  withOverlay: o = !1,
  small: c = !1,
  description: t = "Loading",
  className: a,
  ...s
}, i) {
  const f = he(
    "cds--loading",
    c ? "cds--loading--small" : "",
    n ? "" : "cds--loading--stop",
    a
  ), b = he(
    "cds--loading-overlay",
    n ? "" : "cds--loading-overlay--stop"
  ), g = /* @__PURE__ */ e(
    "div",
    {
      ref: o ? void 0 : i,
      ...s,
      "aria-atomic": "true",
      "aria-live": n ? "assertive" : "off",
      "aria-busy": n || void 0,
      className: f,
      children: /* @__PURE__ */ N(
        "svg",
        {
          className: "cds--loading__svg",
          viewBox: "0 0 100 100",
          role: "img",
          "aria-label": t,
          children: [
            /* @__PURE__ */ e("title", { children: t }),
            c ? /* @__PURE__ */ e("circle", { className: "cds--loading__background", cx: "50%", cy: "50%", r: "42" }) : null,
            /* @__PURE__ */ e(
              "circle",
              {
                className: "cds--loading__stroke",
                cx: "50%",
                cy: "50%",
                r: c ? "42" : "44"
              }
            )
          ]
        }
      )
    }
  );
  return o ? /* @__PURE__ */ e("div", { ref: i, className: b, children: g }) : g;
});
function _e(...r) {
  return r.filter(Boolean).join(" ");
}
const hn = z.forwardRef(
  function({ className: n, children: o, noTrailingSlash: c, ...t }, a) {
    return /* @__PURE__ */ e("nav", { ref: a, "aria-label": "Breadcrumb", className: n, ...t, children: /* @__PURE__ */ e(
      "ol",
      {
        className: _e(
          "cds--breadcrumb",
          c ? "cds--breadcrumb--no-trailing-slash" : ""
        ),
        children: o
      }
    ) });
  }
), pn = z.forwardRef(
  function({ className: n, href: o, isCurrentPage: c, children: t, ...a }, s) {
    const i = _e(
      "cds--breadcrumb-item",
      c ? "cds--breadcrumb-item--current" : "",
      n
    );
    return /* @__PURE__ */ e("li", { ref: s, className: i, ...a, children: c ? o ? /* @__PURE__ */ e("a", { href: o, className: "cds--link", "aria-current": "page", children: t }) : /* @__PURE__ */ e("span", { className: "cds--link", "aria-current": "page", children: t }) : o ? /* @__PURE__ */ e("a", { href: o, className: "cds--link", children: t }) : /* @__PURE__ */ e("span", { className: "cds--link", children: t }) });
  }
);
function Y(...r) {
  return r.filter(Boolean).join(" ");
}
function pe({ warning: r }) {
  return r ? /* @__PURE__ */ N(
    "svg",
    {
      className: "cds--text-input__invalid-icon cds--text-input__invalid-icon--warning",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      width: 16,
      height: 16,
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ e("path", { d: "M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2 c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" }),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8 c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z",
            fill: "none",
            opacity: 0
          }
        )
      ]
    }
  ) : /* @__PURE__ */ e(
    "svg",
    {
      className: "cds--text-input__invalid-icon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      width: 16,
      height: 16,
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e("path", { d: "M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.4,3.6h1.1v5H7.4V3.6z M8,12.2 c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" })
    }
  );
}
const Qe = te(
  function(n, o) {
    const c = O(), {
      id: t,
      labelText: a,
      helperText: s,
      invalidText: i,
      warnText: f,
      placeholder: b,
      defaultValue: g,
      value: h,
      onChange: l,
      disabled: u,
      invalid: p,
      warn: v,
      readOnly: m,
      size: y = "md",
      type: d = "text",
      hideLabel: k,
      inline: x,
      light: _,
      className: $,
      ...B
    } = n, w = t ?? c, C = !!(p && i), A = !!(v && f && !C), T = !!s && !C && !A, D = y === "sm" ? "cds--text-input--sm" : y === "lg" ? "cds--text-input--lg" : y === "xl" ? "cds--text-input--xl" : void 0, I = Y(
      "cds--label",
      u && "cds--label--disabled",
      k && "cds--visually-hidden",
      x && "cds--label--inline",
      x && y === "sm" && "cds--label--inline--sm",
      x && y === "lg" && "cds--label--inline--lg"
    ), H = `${w}-helper`, P = `${w}-requirement`, K = Y(
      T && H,
      (C || A) && P
    );
    return /* @__PURE__ */ e("div", { className: Y("cds--form-item", $), children: /* @__PURE__ */ N(
      "div",
      {
        className: Y(
          "cds--text-input-wrapper",
          x && "cds--text-input-wrapper--inline",
          x && C && "cds--text-input-wrapper--inline--invalid"
        ),
        children: [
          /* @__PURE__ */ e("label", { htmlFor: w, className: I, children: a }),
          /* @__PURE__ */ N(
            "div",
            {
              className: Y(
                "cds--text-input__field-wrapper",
                A && "cds--text-input__field-wrapper--warning"
              ),
              "data-invalid": C ? !0 : void 0,
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    ref: o,
                    id: w,
                    type: d,
                    className: Y(
                      "cds--text-input",
                      D,
                      _ && "cds--text-input--light",
                      C && "cds--text-input--invalid",
                      A && "cds--text-input--warning"
                    ),
                    placeholder: b,
                    defaultValue: g,
                    value: h,
                    onChange: l,
                    disabled: u,
                    readOnly: m,
                    "aria-invalid": C || void 0,
                    "aria-describedby": K || void 0,
                    ...B
                  }
                ),
                C && /* @__PURE__ */ e(pe, {}),
                A && /* @__PURE__ */ e(pe, { warning: !0 })
              ]
            }
          ),
          T && /* @__PURE__ */ e("div", { id: H, className: "cds--form__helper-text", children: s }),
          C && /* @__PURE__ */ e(
            "div",
            {
              id: P,
              className: "cds--form-requirement",
              role: "alert",
              children: i
            }
          ),
          A && /* @__PURE__ */ e(
            "div",
            {
              id: P,
              className: "cds--form-requirement",
              role: "alert",
              children: f
            }
          )
        ]
      }
    ) });
  }
);
Qe.displayName = "TextInput";
function de(...r) {
  return r.filter(Boolean).join(" ");
}
const Xe = te(
  function(n, o) {
    const {
      id: c,
      labelText: t,
      checked: a,
      defaultChecked: s,
      indeterminate: i,
      onChange: f,
      disabled: b,
      hideLabel: g,
      readOnly: h,
      className: l,
      ...u
    } = n, p = F(null), v = M(
      (m) => {
        p.current = m, m && (m.indeterminate = !!i), typeof o == "function" ? o(m) : o && (o.current = m);
      },
      [o]
    );
    return V(() => {
      p.current && (p.current.indeterminate = !!i);
    }, [i]), /* @__PURE__ */ N("div", { className: de("cds--form-item", "cds--checkbox-wrapper", l), children: [
      /* @__PURE__ */ e(
        "input",
        {
          ref: v,
          type: "checkbox",
          id: c,
          className: "cds--checkbox",
          checked: a,
          defaultChecked: s,
          onChange: f,
          disabled: b,
          readOnly: h,
          "aria-readonly": h || void 0,
          ...u
        }
      ),
      /* @__PURE__ */ e("label", { htmlFor: c, className: "cds--checkbox-label", children: /* @__PURE__ */ e(
        "span",
        {
          className: de(
            "cds--checkbox-label-text",
            g && "cds--visually-hidden"
          ),
          children: t
        }
      ) })
    ] });
  }
);
Xe.displayName = "Checkbox";
function vn({
  legendText: r,
  orientation: n = "vertical",
  children: o,
  className: c,
  ...t
}) {
  return /* @__PURE__ */ N(
    "fieldset",
    {
      className: de(
        "cds--checkbox-group",
        n === "horizontal" && "cds--checkbox-group--horizontal",
        c
      ),
      ...t,
      children: [
        r ? /* @__PURE__ */ e("legend", { className: "cds--label", children: r }) : null,
        o
      ]
    }
  );
}
function re(...r) {
  return r.filter(Boolean).join(" ");
}
const Ne = te(
  function(n, o) {
    const {
      id: c,
      labelText: t,
      value: a,
      name: s,
      checked: i,
      defaultChecked: f,
      onChange: b,
      disabled: g,
      hideLabel: h,
      readOnly: l,
      labelPosition: u = "right",
      className: p,
      ...v
    } = n;
    return /* @__PURE__ */ N(
      "div",
      {
        className: re(
          "cds--form-item",
          "cds--radio-button-wrapper",
          u === "left" && "cds--radio-button-wrapper--label-left",
          u === "right" && "cds--radio-button-wrapper--label-right",
          p
        ),
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: o,
              type: "radio",
              id: c,
              className: "cds--radio-button",
              name: s,
              value: a,
              checked: i,
              defaultChecked: f,
              onChange: b,
              disabled: g,
              readOnly: l,
              "aria-readonly": l || void 0,
              ...v
            }
          ),
          /* @__PURE__ */ N("label", { htmlFor: c, className: "cds--radio-button__label", children: [
            /* @__PURE__ */ e("span", { className: "cds--radio-button__appearance", "aria-hidden": "true" }),
            /* @__PURE__ */ e(
              "span",
              {
                className: re(
                  "cds--radio-button__label-text",
                  h && "cds--visually-hidden"
                ),
                children: t
              }
            )
          ] })
        ]
      }
    );
  }
);
Ne.displayName = "RadioButton";
function yn({
  name: r,
  legendText: n,
  orientation: o = "vertical",
  defaultSelected: c,
  valueSelected: t,
  onChange: a,
  disabled: s,
  children: i,
  className: f,
  ...b
}) {
  const [g, h] = W(c ?? ""), l = t !== void 0, u = l ? t : g, p = M(
    (m, y) => {
      l || h(m), a == null || a(m, y);
    },
    [l, a]
  ), v = fe.map(i, (m) => {
    if (!oe(m) || m.type !== Ne)
      return m;
    const y = m.props;
    return z.cloneElement(
      m,
      {
        name: r,
        checked: u === y.value,
        disabled: s || y.disabled,
        onChange: (d) => {
          var k;
          (k = y.onChange) == null || k.call(y, d), !d.defaultPrevented && !s && p(y.value, d);
        }
      }
    );
  });
  return /* @__PURE__ */ e("div", { className: re("cds--form-item", f), ...b, children: /* @__PURE__ */ N(
    "fieldset",
    {
      className: re(
        "cds--radio-button-group",
        o === "vertical" && "cds--radio-button-group--vertical"
      ),
      children: [
        n ? /* @__PURE__ */ e("legend", { className: "cds--label", children: n }) : null,
        v
      ]
    }
  ) });
}
function ee(...r) {
  return r.filter(Boolean).join(" ");
}
const Ze = te(
  function(n, o) {
    const {
      id: c,
      labelText: t,
      labelA: a = "Off",
      labelB: s = "On",
      toggled: i,
      defaultToggled: f = !1,
      onToggle: b,
      disabled: g,
      size: h = "md",
      hideLabel: l,
      readOnly: u,
      className: p,
      onClick: v,
      ...m
    } = n, [y, d] = W(f), k = i !== void 0, x = k ? !!i : y, _ = M(
      (B) => {
        if (v == null || v(B), B.defaultPrevented || g || u)
          return;
        const w = !x;
        k || d(w), b == null || b(w);
      },
      [g, u, k, x, v, b]
    ), $ = ee(
      "cds--toggle__label-text",
      !!(l && t) && "cds--visually-hidden"
    );
    return /* @__PURE__ */ e("div", { className: ee("cds--form-item", p), children: /* @__PURE__ */ N(
      "div",
      {
        className: ee(
          "cds--toggle",
          g && "cds--toggle--disabled",
          u && "cds--toggle--readonly",
          h === "sm" && "cds--toggle--sm"
        ),
        children: [
          /* @__PURE__ */ e(
            "button",
            {
              ref: o,
              id: c,
              type: "button",
              role: "switch",
              "aria-checked": x,
              "aria-readonly": u || void 0,
              disabled: g,
              className: "cds--toggle__button cds--toggle-input",
              onClick: _,
              ...m
            }
          ),
          /* @__PURE__ */ N(
            "label",
            {
              htmlFor: c,
              className: "cds--toggle__label cds--toggle-input__label",
              children: [
                t ? /* @__PURE__ */ e("span", { className: $, children: t }) : null,
                /* @__PURE__ */ N(
                  "div",
                  {
                    className: ee(
                      "cds--toggle__appearance",
                      h === "sm" && "cds--toggle__appearance--sm"
                    ),
                    children: [
                      /* @__PURE__ */ e(
                        "div",
                        {
                          className: ee(
                            "cds--toggle__switch",
                            x && "cds--toggle__switch--checked"
                          ),
                          children: h === "sm" && !u ? /* @__PURE__ */ e(
                            "svg",
                            {
                              className: "cds--toggle__check",
                              width: 6,
                              height: 5,
                              viewBox: "0 0 6 5",
                              "aria-hidden": "true",
                              focusable: "false",
                              children: /* @__PURE__ */ e("path", { d: "M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" })
                            }
                          ) : null
                        }
                      ),
                      /* @__PURE__ */ e("span", { className: "cds--toggle__text", "aria-hidden": "true", children: x ? s : a })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    ) });
  }
);
Ze.displayName = "Toggle";
function J(...r) {
  return r.filter(Boolean).join(" ");
}
function ve({ warning: r }) {
  return r ? /* @__PURE__ */ N(
    "svg",
    {
      className: "cds--list-box__invalid-icon cds--list-box__invalid-icon--warning",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      width: 16,
      height: 16,
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ e("path", { d: "M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2 c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" }),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8 c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z",
            fill: "none",
            opacity: 0
          }
        )
      ]
    }
  ) : /* @__PURE__ */ e(
    "svg",
    {
      className: "cds--list-box__invalid-icon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      width: 16,
      height: 16,
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e("path", { d: "M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.4,3.6h1.1v5H7.4V3.6z M8,12.2 c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" })
    }
  );
}
function en() {
  return /* @__PURE__ */ e(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      width: 16,
      height: 16,
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e("polygon", { points: "8,11 3,6 3.7,5.3 8,9.6 12.3,5.3 13,6 " })
    }
  );
}
const nn = te(
  function(n, o) {
    const c = O(), {
      id: t,
      items: a,
      selectedItem: s,
      onChange: i,
      titleText: f,
      helperText: b,
      invalidText: g,
      warnText: h,
      disabled: l,
      invalid: u,
      warn: p,
      size: v = "md",
      type: m = "default",
      label: y,
      readOnly: d,
      hideLabel: k,
      direction: x = "bottom",
      className: _,
      ...$
    } = n, B = s !== void 0, [w, C] = W(null), A = B ? s ?? null : w, [T, D] = W(!1), [I, H] = W(0), P = F(null), K = M(
      (S) => {
        P.current = S, typeof o == "function" ? o(S) : o && (o.current = S);
      },
      [o]
    ), R = `${t}-${c}-lbl`, G = `${t}-${c}-hlp`, q = `${t}-${c}-req`, Z = `${t}-${c}-menu`, L = ue(() => A ? a.findIndex((S) => S.id === A.id) : -1, [a, A]), U = !!(u && g), ae = !!(p && h && !U), me = !!b && !U && !ae, $e = J(
      f != null && f !== "" && R,
      me && G,
      (U || ae) && q
    );
    V(() => {
      if (!T)
        return;
      const S = (E) => {
        const j = P.current;
        j && !j.contains(E.target) && D(!1);
      };
      return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
    }, [T]);
    const ce = M(
      (S) => {
        B || C(S), i == null || i({ selectedItem: S });
      },
      [B, i]
    ), ie = M(() => {
      l || d || D((S) => {
        const E = !S;
        if (E) {
          const j = L >= 0 ? L : a.length > 0 ? 0 : -1;
          H(j >= 0 ? j : 0);
        }
        return E;
      });
    }, [l, d, L, a.length]), Ee = M(
      (S) => {
        if (!(l || d)) {
          if (S.key === "Escape" && T) {
            S.preventDefault(), D(!1);
            return;
          }
          if (S.key === "Enter" || S.key === " ") {
            S.preventDefault(), T && I >= 0 && a[I] ? (ce(a[I]), D(!1)) : ie();
            return;
          }
          if (S.key === "ArrowDown") {
            if (S.preventDefault(), !T) {
              H(L >= 0 ? L : 0), D(!0);
              return;
            }
            H(
              (E) => a.length === 0 ? 0 : (E + 1) % a.length
            );
            return;
          }
          if (S.key === "ArrowUp") {
            if (S.preventDefault(), !T) {
              const E = L >= 0 ? L : Math.max(0, a.length - 1);
              H(E), D(!0);
              return;
            }
            H(
              (E) => a.length === 0 ? 0 : (E - 1 + a.length) % a.length
            );
          }
        }
      },
      [
        l,
        d,
        T,
        I,
        a,
        ie,
        ce,
        L
      ]
    ), Le = (A == null ? void 0 : A.label) ?? y ?? (f ? String(f) : ""), Pe = f ? void 0 : y ?? "Options";
    return /* @__PURE__ */ N("div", { ref: K, className: J("cds--form-item", _), ...$, children: [
      f ? /* @__PURE__ */ e(
        "label",
        {
          id: R,
          htmlFor: t,
          className: J("cds--label", k && "cds--visually-hidden"),
          children: f
        }
      ) : null,
      /* @__PURE__ */ N(
        "div",
        {
          className: J(
            "cds--dropdown",
            "cds--list-box",
            T && "cds--dropdown--open",
            T && "cds--list-box--expanded",
            v === "sm" && "cds--dropdown--sm",
            v === "sm" && "cds--list-box--sm",
            v === "lg" && "cds--dropdown--lg",
            v === "lg" && "cds--list-box--lg",
            m === "inline" && "cds--dropdown--inline",
            m === "inline" && "cds--list-box--inline",
            l && "cds--dropdown--disabled",
            l && "cds--list-box--disabled",
            u && "cds--dropdown--invalid",
            p && "cds--dropdown--warning",
            p && "cds--list-box--warning",
            x === "top" && "cds--list-box--up"
          ),
          "data-invalid": u ? !0 : void 0,
          children: [
            /* @__PURE__ */ N(
              "button",
              {
                type: "button",
                id: t,
                className: "cds--list-box__field",
                role: "combobox",
                "aria-expanded": T,
                "aria-haspopup": "listbox",
                "aria-controls": Z,
                "aria-label": Pe,
                "aria-activedescendant": T && I >= 0 ? `${t}-item-${I}` : void 0,
                "aria-labelledby": f ? R : void 0,
                "aria-describedby": $e || void 0,
                "aria-invalid": U || void 0,
                "aria-readonly": d || void 0,
                disabled: l,
                onClick: () => {
                  d || ie();
                },
                onKeyDown: Ee,
                children: [
                  /* @__PURE__ */ e("span", { className: "cds--list-box__label", children: Le }),
                  U && /* @__PURE__ */ e(ve, {}),
                  ae && /* @__PURE__ */ e(ve, { warning: !0 }),
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: J(
                        "cds--list-box__menu-icon",
                        T && "cds--list-box__menu-icon--open"
                      ),
                      children: /* @__PURE__ */ e(en, {})
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e(
              "ul",
              {
                id: Z,
                className: "cds--list-box__menu",
                role: "listbox",
                "aria-labelledby": f ? R : void 0,
                tabIndex: -1,
                children: a.map((S, E) => {
                  const j = (A == null ? void 0 : A.id) === S.id;
                  return /* @__PURE__ */ e(
                    "li",
                    {
                      role: "presentation",
                      className: J(
                        "cds--list-box__menu-item",
                        j && "cds--list-box__menu-item--active",
                        T && I === E && "cds--list-box__menu-item--highlighted"
                      ),
                      children: /* @__PURE__ */ e(
                        "div",
                        {
                          id: `${t}-item-${E}`,
                          role: "option",
                          "aria-selected": j,
                          className: "cds--list-box__menu-item__option",
                          onMouseDown: (We) => {
                            We.preventDefault();
                          },
                          onClick: () => {
                            l || d || (ce(S), D(!1));
                          },
                          children: S.label
                        }
                      )
                    },
                    S.id
                  );
                })
              }
            )
          ]
        }
      ),
      me ? /* @__PURE__ */ e("div", { id: G, className: "cds--form__helper-text", children: b }) : null,
      U ? /* @__PURE__ */ e(
        "div",
        {
          id: q,
          className: "cds--form-requirement",
          role: "alert",
          children: g
        }
      ) : null,
      ae ? /* @__PURE__ */ e(
        "div",
        {
          id: q,
          className: "cds--form-requirement",
          role: "alert",
          children: h
        }
      ) : null
    ] });
  }
);
nn.displayName = "Dropdown";
function ne(...r) {
  return r.filter(Boolean).join(" ");
}
const tn = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function ye(r) {
  return Array.from(r.querySelectorAll(tn)).filter(
    (n) => n.offsetParent !== null || n === document.activeElement
  );
}
const xn = z.forwardRef(
  function({
    open: n,
    onRequestClose: o,
    onRequestSubmit: c,
    modalLabel: t,
    modalHeading: a,
    primaryButtonText: s,
    secondaryButtonText: i,
    primaryButtonDisabled: f,
    secondaryButtons: b,
    danger: g,
    preventCloseOnClickOutside: h,
    size: l = "md",
    passiveModal: u,
    hasScrollingContent: p,
    children: v,
    className: m,
    ...y
  }, d) {
    const k = O(), x = O(), _ = F(null), $ = M(
      (I) => {
        _.current = I, typeof d == "function" ? d(I) : d && (d.current = I);
      },
      [d]
    ), B = l === "md" ? "" : `cds--modal-container--${l}`, w = Array.isArray(b) && b.length === 2, C = M(() => {
      o == null || o();
    }, [o]);
    V(() => {
      if (!n)
        return;
      function I(H) {
        H.key === "Escape" && (H.stopPropagation(), C());
      }
      return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
    }, [n, C]), V(() => {
      if (!n || !_.current)
        return;
      const I = _.current, P = ye(I)[0];
      P == null || P.focus();
      function K(R) {
        if (R.key !== "Tab" || !_.current)
          return;
        const G = ye(_.current);
        if (G.length === 0)
          return;
        const q = G[0], Z = G[G.length - 1], L = document.activeElement;
        R.shiftKey ? (L === q || !_.current.contains(L)) && (R.preventDefault(), Z.focus()) : L === Z && (R.preventDefault(), q.focus());
      }
      return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
    }, [n]);
    function A(I) {
      h || I.target === I.currentTarget && C();
    }
    if (typeof document > "u" || !n)
      return null;
    const T = [t && x, a && k].filter(Boolean).join(" ") || void 0, D = /* @__PURE__ */ e(
      "div",
      {
        ...y,
        ref: $,
        className: ne("cds--modal", n && "cds--modal-is-visible", m),
        role: "presentation",
        onMouseDown: A,
        children: /* @__PURE__ */ N(
          "div",
          {
            className: ne("cds--modal-container", B),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": T,
            children: [
              /* @__PURE__ */ N("div", { className: "cds--modal-header", children: [
                t ? /* @__PURE__ */ e("p", { className: "cds--modal-header__label", id: x, children: t }) : null,
                a ? /* @__PURE__ */ e("h2", { className: "cds--modal-header__heading", id: k, children: a }) : null,
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Close",
                    className: "cds--modal-close",
                    onClick: C,
                    children: /* @__PURE__ */ e(
                      "svg",
                      {
                        className: "cds--modal-close__icon",
                        "aria-hidden": "true",
                        width: 20,
                        height: 20,
                        viewBox: "0 0 32 32",
                        children: /* @__PURE__ */ e("path", { d: "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z" })
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ e(
                "div",
                {
                  className: ne(
                    "cds--modal-content",
                    p && "cds--modal-scroll-content"
                  ),
                  ...p ? {
                    tabIndex: 0,
                    role: "region",
                    "aria-labelledby": T
                  } : {},
                  children: v
                }
              ),
              u ? null : /* @__PURE__ */ N(
                "div",
                {
                  className: ne(
                    "cds--modal-footer",
                    w && "cds--modal-footer--three-button"
                  ),
                  children: [
                    Array.isArray(b) && b.length > 0 && b.length <= 2 ? b.map((I, H) => /* @__PURE__ */ e(z.Fragment, { children: I }, H)) : i && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        className: "cds--btn cds--btn--secondary",
                        onClick: C,
                        children: i
                      }
                    ),
                    s ? /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        className: ne(
                          "cds--btn",
                          g ? "cds--btn--danger" : "cds--btn--primary"
                        ),
                        disabled: f,
                        onClick: (I) => {
                          c == null || c(I);
                        },
                        children: s
                      }
                    ) : null
                  ]
                }
              )
            ]
          }
        )
      }
    );
    return Oe(D, document.body);
  }
);
function ke(...r) {
  return r.filter(Boolean).join(" ");
}
function Se(r) {
  return r === "error" ? "alert" : "status";
}
function Be({ kind: r }) {
  const n = {
    "aria-hidden": !0,
    width: 20,
    height: 20,
    viewBox: "0 0 32 32",
    fill: "currentColor",
    focusable: "false"
  };
  switch (r) {
    case "success":
      return /* @__PURE__ */ e("svg", { ...n, children: /* @__PURE__ */ e("path", { d: "M16 2a14 14 0 1014 14A14.016 14.016 0 0016 2zm-2 19.59l-5-5L10.59 15 14 18.41 22.59 9.82 24 11.23z" }) });
    case "info":
    case "info-square":
      return /* @__PURE__ */ e("svg", { ...n, children: /* @__PURE__ */ e("path", { d: "M16 2a14 14 0 1014 14A14.016 14.016 0 0016 2zm1 22h-2v-9h2zm0-12h-2V8h2z" }) });
    case "warning":
    case "warning-alt":
      return /* @__PURE__ */ e("svg", { ...n, children: /* @__PURE__ */ e("path", { d: "M16 2L2 28h28zm0 4.2L25.8 26H6.2zm-1 8v6h2v-6zm0 8v2h2v-2z" }) });
    case "error":
    default:
      return /* @__PURE__ */ e("svg", { ...n, children: /* @__PURE__ */ e("path", { d: "M16 2a14 14 0 1014 14A14.016 14.016 0 0016 2zm-1 6h2v10h-2zm0 12h2v2h-2z" }) });
  }
}
const wn = z.forwardRef(function({
  kind: n = "info",
  title: o,
  subtitle: c,
  hideCloseButton: t,
  onClose: a,
  lowContrast: s,
  role: i,
  statusIconDescription: f = "notification",
  className: b,
  children: g,
  ...h
}, l) {
  const u = i ?? Se(n);
  return /* @__PURE__ */ N(
    "div",
    {
      ...h,
      ref: l,
      role: u,
      className: ke(
        "cds--inline-notification",
        `cds--inline-notification--${n}`,
        s && "cds--inline-notification--low-contrast",
        b
      ),
      children: [
        /* @__PURE__ */ N("div", { className: "cds--inline-notification__details", children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "cds--inline-notification__icon",
              "aria-label": f,
              children: /* @__PURE__ */ e(Be, { kind: n })
            }
          ),
          /* @__PURE__ */ N("div", { className: "cds--inline-notification__text-wrapper", children: [
            /* @__PURE__ */ e("p", { className: "cds--inline-notification__title", children: o }),
            c ? /* @__PURE__ */ e("div", { className: "cds--inline-notification__subtitle", children: c }) : null,
            g
          ] })
        ] }),
        t ? null : /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "closes notification",
            className: "cds--inline-notification__close-button",
            onClick: a,
            children: /* @__PURE__ */ e("span", { className: "cds--inline-notification__close-icon", "aria-hidden": "true", children: /* @__PURE__ */ e("svg", { width: 16, height: 16, viewBox: "0 0 32 32", fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z" }) }) })
          }
        )
      ]
    }
  );
}), _n = z.forwardRef(function({
  kind: n = "info",
  title: o,
  subtitle: c,
  caption: t,
  timeout: a,
  hideCloseButton: s,
  onClose: i,
  lowContrast: f,
  role: b,
  statusIconDescription: g = "notification",
  className: h,
  children: l,
  ...u
}, p) {
  const v = b ?? Se(n), m = F(i);
  return m.current = i, V(() => {
    if (a == null || a <= 0)
      return;
    const y = window.setTimeout(() => {
      var d;
      (d = m.current) == null || d.call(m);
    }, a);
    return () => window.clearTimeout(y);
  }, [a]), /* @__PURE__ */ N(
    "div",
    {
      ...u,
      ref: p,
      role: v,
      className: ke(
        "cds--toast-notification",
        `cds--toast-notification--${n}`,
        f && "cds--toast-notification--low-contrast",
        h
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "cds--toast-notification__icon",
            "aria-label": g,
            children: /* @__PURE__ */ e(Be, { kind: n })
          }
        ),
        /* @__PURE__ */ N("div", { className: "cds--toast-notification__content", children: [
          /* @__PURE__ */ e("p", { className: "cds--toast-notification__title", children: o }),
          c ? /* @__PURE__ */ e("div", { className: "cds--toast-notification__subtitle", children: c }) : null,
          t ? /* @__PURE__ */ e("div", { className: "cds--toast-notification__caption", children: t }) : null,
          l
        ] }),
        s ? null : /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "closes notification",
            className: "cds--toast-notification__close-button",
            onClick: i,
            children: /* @__PURE__ */ e("span", { className: "cds--toast-notification__close-icon", "aria-hidden": "true", children: /* @__PURE__ */ e("svg", { width: 16, height: 16, viewBox: "0 0 32 32", fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z" }) }) })
          }
        )
      ]
    }
  );
});
function be(...r) {
  return r.filter(Boolean).join(" ");
}
const Ie = X(null);
function ge(r) {
  const n = Q(Ie);
  if (!n)
    throw new Error(`${r} must be used within <Tabs>`);
  return n;
}
const Te = X(-1), Ce = X(-1), Ae = X(
  null
), Nn = z.forwardRef(function({
  selectedIndex: n,
  defaultSelectedIndex: o = 0,
  onChange: c,
  children: t,
  className: a,
  ...s
}, i) {
  const f = O().replace(/:/g, ""), b = n !== void 0, [g, h] = W(o), l = b ? n : g, u = M(
    (v) => {
      b || h(v), c == null || c(v);
    },
    [b, c]
  ), p = ue(
    () => ({
      baseId: f,
      selectedIndex: l,
      setSelectedIndex: u
    }),
    [f, l, u]
  );
  return /* @__PURE__ */ e(Ie.Provider, { value: p, children: /* @__PURE__ */ e("div", { ref: i, className: a, ...s, children: t }) });
}), kn = z.forwardRef(
  function({
    activation: n = "automatic",
    "aria-label": o,
    contained: c = !1,
    children: t,
    className: a,
    ...s
  }, i) {
    const { selectedIndex: f, setSelectedIndex: b } = ge("TabList"), [g, h] = W(f), l = F(null), u = F(null);
    V(() => {
      h(f);
    }, [f]);
    const p = M(
      (d) => {
        l.current = d, typeof i == "function" ? i(d) : i && (i.current = d);
      },
      [i]
    ), v = ue(
      () => ({
        activation: n,
        focusedTabIndex: g,
        setFocusedTabIndex: h
      }),
      [n, g]
    ), m = M(() => {
      const d = u.current;
      return d ? Array.from(
        d.querySelectorAll(
          'button[role="tab"]:not([disabled])'
        )
      ) : [];
    }, []), y = M(
      (d) => {
        if (d.key !== "ArrowLeft" && d.key !== "ArrowRight")
          return;
        d.preventDefault();
        const k = m();
        if (k.length === 0)
          return;
        const x = document.activeElement, _ = k.findIndex((T) => T === x);
        if (_ < 0)
          return;
        const $ = d.key === "ArrowRight" ? 1 : -1;
        let B = _ + $;
        B < 0 && (B = k.length - 1), B >= k.length && (B = 0);
        const w = k[B], C = w == null ? void 0 : w.getAttribute("data-mk-tab-index"), A = C != null ? Number(C) : B;
        w == null || w.focus(), n === "automatic" && b(A);
      },
      [n, m, b]
    );
    return /* @__PURE__ */ e(
      "div",
      {
        className: be("cds--tabs", c && "cds--tabs--contained", a),
        ref: p,
        children: /* @__PURE__ */ e(Ae.Provider, { value: v, children: /* @__PURE__ */ e(
          "div",
          {
            ...s,
            ref: u,
            role: "tablist",
            "aria-label": o,
            className: "cds--tab--list",
            onKeyDown: y,
            children: /* @__PURE__ */ e("div", { className: "cds--tabs__nav", children: fe.map(
              t,
              (d, k) => oe(d) ? /* @__PURE__ */ e(Te.Provider, { value: k, children: d }, k) : d
            ) })
          }
        ) })
      }
    );
  }
), Sn = z.forwardRef(function({ disabled: n, children: o, className: c, onClick: t, onKeyDown: a, onFocus: s, ...i }, f) {
  const { baseId: b, selectedIndex: g, setSelectedIndex: h } = ge("Tab"), l = Q(Te), u = Q(Ae), p = `${b}-tab-${l}`, v = `${b}-panel-${l}`, m = g === l, y = (u == null ? void 0 : u.focusedTabIndex) ?? g, d = u == null ? void 0 : u.setFocusedTabIndex, k = (x) => {
    a == null || a(x), !x.defaultPrevented && (u == null ? void 0 : u.activation) === "manual" && (x.key === "Enter" || x.key === " ") && (x.preventDefault(), n || h(l));
  };
  return /* @__PURE__ */ e(
    "button",
    {
      ...i,
      ref: f,
      type: "button",
      role: "tab",
      id: p,
      "data-mk-tab-index": l,
      "aria-controls": v,
      "aria-selected": m,
      "aria-disabled": n || void 0,
      disabled: n,
      tabIndex: y === l ? 0 : -1,
      className: be(
        "cds--tabs__nav-item",
        "cds--tabs__nav-link",
        m && "cds--tabs__nav-item--selected",
        n && "cds--tabs__nav-item--disabled",
        c
      ),
      onFocus: (x) => {
        d == null || d(l), s == null || s(x);
      },
      onClick: (x) => {
        n || h(l), t == null || t(x);
      },
      onKeyDown: k,
      children: /* @__PURE__ */ e("span", { className: "cds--tabs__nav-item-label-wrapper", children: /* @__PURE__ */ e("span", { className: "cds--tabs__nav-item-label", children: o }) })
    }
  );
}), Bn = z.forwardRef(
  function({ children: n, className: o, ...c }, t) {
    return /* @__PURE__ */ e("div", { ref: t, className: o, ...c, children: fe.map(
      n,
      (a, s) => oe(a) ? /* @__PURE__ */ e(Ce.Provider, { value: s, children: a }, s) : a
    ) });
  }
), In = z.forwardRef(
  function({ children: n, className: o, ...c }, t) {
    const { baseId: a, selectedIndex: s } = ge("TabPanel"), i = Q(Ce), f = `${a}-tab-${i}`, b = `${a}-panel-${i}`;
    return /* @__PURE__ */ e(
      "div",
      {
        ...c,
        ref: t,
        id: b,
        role: "tabpanel",
        "aria-labelledby": f,
        hidden: !(s === i),
        className: be("cds--tab-content", o),
        children: n
      }
    );
  }
);
function ze(...r) {
  return r.filter(Boolean).join(" ");
}
const He = X(!1), Tn = z.forwardRef(
  function({
    align: n = "start",
    size: o = "md",
    disabled: c = !1,
    children: t,
    className: a,
    ...s
  }, i) {
    return /* @__PURE__ */ e(He.Provider, { value: c, children: /* @__PURE__ */ e(
      "ul",
      {
        ...s,
        ref: i,
        className: ze(
          "cds--accordion",
          `cds--accordion--${o}`,
          `cds--accordion--${n}`,
          a
        ),
        children: t
      }
    ) });
  }
), Cn = z.forwardRef(
  function({
    title: n,
    open: o,
    defaultOpen: c = !1,
    disabled: t,
    onHeadingClick: a,
    children: s,
    className: i,
    ...f
  }, b) {
    const h = Q(He) || !!t, l = O().replace(/:/g, ""), u = o !== void 0, [p, v] = W(c), m = u ? !!o : p;
    return /* @__PURE__ */ N(
      "li",
      {
        ...f,
        ref: b,
        className: ze(
          "cds--accordion__item",
          m && "cds--accordion__item--active",
          h && "cds--accordion__item--disabled",
          i
        ),
        children: [
          /* @__PURE__ */ N(
            "button",
            {
              type: "button",
              className: "cds--accordion__heading",
              "aria-expanded": m,
              "aria-controls": l,
              disabled: h,
              onClick: (y) => {
                if (h)
                  return;
                const d = !m;
                a == null || a(y, d), u || v(d);
              },
              children: [
                /* @__PURE__ */ e(
                  "svg",
                  {
                    className: "cds--accordion__arrow",
                    "aria-hidden": "true",
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    focusable: "false",
                    children: /* @__PURE__ */ e("path", { d: "M8 11L3 6h10z", fill: "currentColor" })
                  }
                ),
                /* @__PURE__ */ e("div", { className: "cds--accordion__title", children: n })
              ]
            }
          ),
          /* @__PURE__ */ e("div", { className: "cds--accordion__wrapper", children: /* @__PURE__ */ e("div", { className: "cds--accordion__content", id: l, children: s }) })
        ]
      }
    );
  }
);
function se(...r) {
  return r.filter(Boolean).join(" ");
}
const An = z.forwardRef(
  function({
    align: n = "top",
    label: o,
    description: c,
    children: t,
    enterDelayMs: a = 100,
    leaveDelayMs: s = 300,
    defaultOpen: i = !1,
    className: f,
    ...b
  }, g) {
    const h = O().replace(/:/g, ""), [l, u] = W(i), p = F(null), v = F(null), m = M(() => {
      p.current != null && (clearTimeout(p.current), p.current = null);
    }, []), y = M(() => {
      v.current != null && (clearTimeout(v.current), v.current = null);
    }, []), d = M(() => {
      y(), m(), p.current = setTimeout(() => {
        u(!0), p.current = null;
      }, a);
    }, [m, y, a]), k = M(() => {
      m(), y(), v.current = setTimeout(() => {
        u(!1), v.current = null;
      }, s);
    }, [m, y, s]);
    V(() => () => {
      m(), y();
    }, [m, y]);
    const x = o ?? c;
    if (!oe(t))
      return null;
    const _ = t.props, $ = {
      ..._,
      className: se("cds--tooltip-trigger", _.className),
      "aria-describedby": l ? h : void 0,
      onMouseEnter: (B) => {
        var w;
        (w = _.onMouseEnter) == null || w.call(_, B), d();
      },
      onMouseLeave: (B) => {
        var w;
        (w = _.onMouseLeave) == null || w.call(_, B), k();
      },
      onFocus: (B) => {
        var w;
        (w = _.onFocus) == null || w.call(_, B), d();
      },
      onBlur: (B) => {
        var w;
        (w = _.onBlur) == null || w.call(_, B), k();
      }
    };
    return /* @__PURE__ */ N(
      "span",
      {
        ...b,
        ref: g,
        className: se(
          "cds--popover-container",
          "cds--tooltip",
          "cds--popover--caret",
          "cds--popover--drop-shadow",
          "cds--popover--high-contrast",
          l && "cds--popover--open",
          `cds--popover--${n}`,
          f
        ),
        children: [
          /* @__PURE__ */ e("div", { className: "cds--tooltip-trigger__wrapper", children: je(t, $) }),
          /* @__PURE__ */ N("span", { className: "cds--popover", children: [
            /* @__PURE__ */ e(
              "span",
              {
                className: se("cds--popover-content", "cds--tooltip-content"),
                id: h,
                role: "tooltip",
                children: x
              }
            ),
            /* @__PURE__ */ e("span", { className: "cds--popover-caret", "aria-hidden": "true" })
          ] })
        ]
      }
    );
  }
), zn = "#000000", Hn = "#ffffff", Mn = {
  10: "#fcf4d6",
  20: "#fddc69",
  30: "#f1c21b",
  40: "#d2a106",
  50: "#b28600",
  60: "#8e6a00",
  70: "#684e00",
  80: "#483700",
  90: "#302400",
  100: "#1c1500"
}, Dn = {
  10: "#fff2e8",
  20: "#ffd9be",
  30: "#ffb784",
  40: "#ff832b",
  50: "#eb6200",
  60: "#ba4e00",
  70: "#8a3800",
  80: "#5e2900",
  90: "#3e1a00",
  100: "#231000"
}, $n = {
  10: "#fff1f1",
  20: "#ffd7d9",
  30: "#ffb3b8",
  40: "#ff8389",
  50: "#fa4d56",
  60: "#da1e28",
  70: "#a2191f",
  80: "#750e13",
  90: "#520408",
  100: "#2d0709"
}, En = {
  10: "#fff0f7",
  20: "#ffd6e8",
  30: "#ffafd2",
  40: "#ff7eb6",
  50: "#ee5396",
  60: "#d02670",
  70: "#9f1853",
  80: "#740937",
  90: "#510224",
  100: "#2a0a18"
}, Ln = {
  10: "#f6f2ff",
  20: "#e8daff",
  30: "#d4bbff",
  40: "#be95ff",
  50: "#a56eff",
  60: "#8a3ffc",
  70: "#6929c4",
  80: "#491d8b",
  90: "#31135e",
  100: "#1c0f30"
}, Pn = {
  10: "#edf5ff",
  20: "#d0e2ff",
  30: "#a6c8ff",
  40: "#78a9ff",
  50: "#4589ff",
  60: "#0f62fe",
  70: "#0043ce",
  80: "#002d9c",
  90: "#001d6c",
  100: "#001141"
}, Wn = {
  10: "#e5f6ff",
  20: "#bae6ff",
  30: "#82cfff",
  40: "#33b1ff",
  50: "#1192e8",
  60: "#0072c3",
  70: "#00539a",
  80: "#003a6d",
  90: "#012749",
  100: "#061727"
}, Rn = {
  10: "#d9fbfb",
  20: "#9ef0f0",
  30: "#3ddbd9",
  40: "#08bdba",
  50: "#009d9a",
  60: "#007d79",
  70: "#005d5d",
  80: "#004144",
  90: "#022b30",
  100: "#081a1c"
}, jn = {
  10: "#defbe6",
  20: "#a7f0ba",
  30: "#6fdc8c",
  40: "#42be65",
  50: "#24a148",
  60: "#198038",
  70: "#0e6027",
  80: "#044317",
  90: "#022d0d",
  100: "#071908"
}, On = {
  10: "#f2f4f8",
  20: "#dde1e6",
  30: "#c1c7cd",
  40: "#a2a9b0",
  50: "#878d96",
  60: "#697077",
  70: "#4d5358",
  80: "#343a3f",
  90: "#21272a",
  100: "#121619"
}, Fn = {
  10: "#f4f4f4",
  20: "#e0e0e0",
  30: "#c6c6c6",
  40: "#a8a8a8",
  50: "#8d8d8d",
  60: "#6f6f6f",
  70: "#525252",
  80: "#393939",
  90: "#262626",
  100: "#161616"
}, Gn = {
  10: "#f7f3f2",
  20: "#e5e0df",
  30: "#cac5c4",
  40: "#ada8a8",
  50: "#8f8b8b",
  60: "#726e6e",
  70: "#565151",
  80: "#3c3838",
  90: "#272525",
  100: "#171414"
}, Me = {
  background: "#ffffff",
  backgroundInverse: "#393939",
  backgroundBrand: "#0f62fe",
  backgroundHover: "rgba(141,141,141,0.12)",
  backgroundActive: "rgba(141,141,141,0.5)",
  backgroundSelected: "rgba(141,141,141,0.2)",
  backgroundSelectedHover: "rgba(141,141,141,0.32)",
  layer01: "#f4f4f4",
  layer02: "#ffffff",
  layer03: "#f4f4f4",
  layerHover01: "#e8e8e8",
  layerHover02: "#e8e8e8",
  layerHover03: "#e8e8e8",
  layerActive01: "#c6c6c6",
  layerActive02: "#c6c6c6",
  layerActive03: "#c6c6c6",
  layerSelected01: "#e0e0e0",
  layerSelected02: "#e0e0e0",
  layerSelected03: "#e0e0e0",
  layerSelectedInverse: "#161616",
  layerAccent01: "#e0e0e0",
  layerAccent02: "#e0e0e0",
  layerAccent03: "#e0e0e0",
  field01: "#f4f4f4",
  field02: "#ffffff",
  field03: "#f4f4f4",
  fieldHover01: "#e8e8e8",
  fieldHover02: "#e8e8e8",
  fieldHover03: "#e8e8e8",
  borderSubtle00: "#e0e0e0",
  borderSubtle01: "#c6c6c6",
  borderSubtle02: "#e0e0e0",
  borderSubtle03: "#c6c6c6",
  borderStrong01: "#8d8d8d",
  borderStrong02: "#8d8d8d",
  borderStrong03: "#8d8d8d",
  borderInverse: "#161616",
  borderInteractive: "#0f62fe",
  borderDisabled: "#c6c6c6",
  textPrimary: "#161616",
  textSecondary: "#525252",
  textPlaceholder: "rgba(22,22,22,0.4)",
  textHelper: "#6f6f6f",
  textError: "#da1e28",
  textInverse: "#ffffff",
  textOnColor: "#ffffff",
  textOnColorDisabled: "#8d8d8d",
  textDisabled: "rgba(22,22,22,0.25)",
  linkPrimary: "#0f62fe",
  linkPrimaryHover: "#0043ce",
  linkSecondary: "#0043ce",
  linkInverse: "#78a9ff",
  linkVisited: "#8a3ffc",
  iconPrimary: "#161616",
  iconSecondary: "#525252",
  iconInverse: "#ffffff",
  iconOnColor: "#ffffff",
  iconOnColorDisabled: "#8d8d8d",
  iconDisabled: "rgba(22,22,22,0.25)",
  iconInteractive: "#0f62fe",
  supportError: "#da1e28",
  supportSuccess: "#24a148",
  supportWarning: "#f1c21b",
  supportInfo: "#0043ce",
  supportErrorInverse: "#fa4d56",
  supportSuccessInverse: "#42be65",
  supportWarningInverse: "#f1c21b",
  supportInfoInverse: "#4589ff",
  focus: "#0f62fe",
  focusInset: "#ffffff",
  focusInverse: "#ffffff",
  interactive: "#0f62fe",
  highlight: "#d0e2ff",
  toggleOff: "#8d8d8d",
  overlay: "rgba(0,0,0,0.5)",
  skeletonBackground: "#e8e8e8",
  skeletonElement: "#c6c6c6",
  buttonPrimaryBackground: "#0f62fe",
  buttonPrimaryHover: "#0050e6",
  buttonPrimaryActive: "#002d9c",
  buttonSecondaryBackground: "#393939",
  buttonSecondaryHover: "#474747",
  buttonSecondaryActive: "#6f6f6f",
  buttonTertiaryBackground: "transparent",
  buttonTertiaryHover: "#0353e9",
  buttonTertiaryActive: "#002d9c",
  buttonDangerBackground: "#da1e28",
  buttonDangerHover: "#b81922",
  buttonDangerActive: "#750e13",
  buttonDisabled: "#c6c6c6",
  notificationInfoBackground: "#edf5ff",
  notificationInfoBorder: "#0043ce",
  notificationSuccessBackground: "#defbe6",
  notificationSuccessBorder: "#24a148",
  notificationWarningBackground: "#fcf4d6",
  notificationWarningBorder: "#f1c21b",
  notificationErrorBackground: "#fff1f1",
  notificationErrorBorder: "#da1e28",
  tagBackgroundGray: "#e0e0e0",
  tagBackgroundCoolGray: "#dde1e6",
  tagBackgroundWarmGray: "#e5e0df",
  tagBackgroundRed: "#ffd7d9",
  tagBackgroundMagenta: "#ffd6e8",
  tagBackgroundPurple: "#e8daff",
  tagBackgroundBlue: "#d0e2ff",
  tagBackgroundCyan: "#bae6ff",
  tagBackgroundTeal: "#9ef0f0",
  tagBackgroundGreen: "#a7f0ba"
}, an = {
  ...Me,
  background: "#f4f4f4",
  layer01: "#ffffff",
  layer02: "#f4f4f4",
  layer03: "#ffffff",
  field01: "#ffffff",
  field02: "#f4f4f4",
  field03: "#ffffff",
  layerHover01: "#e8e8e8",
  layerHover02: "#e8e8e8",
  layerHover03: "#e8e8e8"
}, De = {
  background: "#262626",
  backgroundInverse: "#f4f4f4",
  backgroundBrand: "#0f62fe",
  backgroundHover: "rgba(141,141,141,0.16)",
  backgroundActive: "rgba(141,141,141,0.4)",
  backgroundSelected: "rgba(141,141,141,0.24)",
  backgroundSelectedHover: "rgba(141,141,141,0.32)",
  layer01: "#393939",
  layer02: "#525252",
  layer03: "#6f6f6f",
  layerHover01: "#474747",
  layerHover02: "#636363",
  layerHover03: "#5e5e5e",
  layerActive01: "#6f6f6f",
  layerActive02: "#8d8d8d",
  layerActive03: "#8d8d8d",
  layerSelected01: "#525252",
  layerSelected02: "#6f6f6f",
  layerSelected03: "#525252",
  layerSelectedInverse: "#f4f4f4",
  layerAccent01: "#525252",
  layerAccent02: "#6f6f6f",
  layerAccent03: "#525252",
  field01: "#393939",
  field02: "#525252",
  field03: "#6f6f6f",
  fieldHover01: "#474747",
  fieldHover02: "#636363",
  fieldHover03: "#5e5e5e",
  borderSubtle00: "#525252",
  borderSubtle01: "#6f6f6f",
  borderSubtle02: "#525252",
  borderSubtle03: "#6f6f6f",
  borderStrong01: "#8d8d8d",
  borderStrong02: "#a8a8a8",
  borderStrong03: "#8d8d8d",
  borderInverse: "#f4f4f4",
  borderInteractive: "#4589ff",
  borderDisabled: "#525252",
  textPrimary: "#f4f4f4",
  textSecondary: "#c6c6c6",
  textPlaceholder: "rgba(244,244,244,0.4)",
  textHelper: "#a8a8a8",
  textError: "#ff8389",
  textInverse: "#161616",
  textOnColor: "#ffffff",
  textOnColorDisabled: "#8d8d8d",
  textDisabled: "rgba(244,244,244,0.25)",
  linkPrimary: "#78a9ff",
  linkPrimaryHover: "#a6c8ff",
  linkSecondary: "#a6c8ff",
  linkInverse: "#0f62fe",
  linkVisited: "#be95ff",
  iconPrimary: "#f4f4f4",
  iconSecondary: "#c6c6c6",
  iconInverse: "#161616",
  iconOnColor: "#ffffff",
  iconOnColorDisabled: "#8d8d8d",
  iconDisabled: "rgba(244,244,244,0.25)",
  iconInteractive: "#ffffff",
  supportError: "#ff8389",
  supportSuccess: "#42be65",
  supportWarning: "#f1c21b",
  supportInfo: "#4589ff",
  supportErrorInverse: "#da1e28",
  supportSuccessInverse: "#24a148",
  supportWarningInverse: "#f1c21b",
  supportInfoInverse: "#0043ce",
  focus: "#ffffff",
  focusInset: "#161616",
  focusInverse: "#0f62fe",
  interactive: "#4589ff",
  highlight: "#002d9c",
  toggleOff: "#8d8d8d",
  overlay: "rgba(0,0,0,0.65)",
  skeletonBackground: "#333333",
  skeletonElement: "#525252",
  buttonPrimaryBackground: "#0f62fe",
  buttonPrimaryHover: "#0050e6",
  buttonPrimaryActive: "#002d9c",
  buttonSecondaryBackground: "#6f6f6f",
  buttonSecondaryHover: "#5e5e5e",
  buttonSecondaryActive: "#393939",
  buttonTertiaryBackground: "transparent",
  buttonTertiaryHover: "#f4f4f4",
  buttonTertiaryActive: "#c6c6c6",
  buttonDangerBackground: "#da1e28",
  buttonDangerHover: "#b81922",
  buttonDangerActive: "#750e13",
  buttonDisabled: "#525252",
  notificationInfoBackground: "#001d6c",
  notificationInfoBorder: "#4589ff",
  notificationSuccessBackground: "#022d0d",
  notificationSuccessBorder: "#42be65",
  notificationWarningBackground: "#302400",
  notificationWarningBorder: "#f1c21b",
  notificationErrorBackground: "#520408",
  notificationErrorBorder: "#ff8389",
  tagBackgroundGray: "#525252",
  tagBackgroundCoolGray: "#4d5358",
  tagBackgroundWarmGray: "#565151",
  tagBackgroundRed: "#750e13",
  tagBackgroundMagenta: "#740937",
  tagBackgroundPurple: "#491d8b",
  tagBackgroundBlue: "#002d9c",
  tagBackgroundCyan: "#003a6d",
  tagBackgroundTeal: "#004144",
  tagBackgroundGreen: "#044317"
}, rn = {
  ...De,
  background: "#161616",
  layer01: "#262626",
  layer02: "#393939",
  layer03: "#525252",
  layerHover01: "#333333",
  layerHover02: "#474747",
  layerHover03: "#636363",
  layerActive01: "#525252",
  layerActive02: "#6f6f6f",
  layerActive03: "#8d8d8d",
  layerSelected01: "#393939",
  layerSelected02: "#525252",
  layerSelected03: "#6f6f6f",
  layerSelectedInverse: "#f4f4f4",
  layerAccent01: "#393939",
  layerAccent02: "#525252",
  layerAccent03: "#6f6f6f",
  field01: "#262626",
  field02: "#393939",
  field03: "#525252",
  fieldHover01: "#333333",
  fieldHover02: "#474747",
  fieldHover03: "#636363",
  borderSubtle00: "#393939",
  borderSubtle01: "#525252",
  borderSubtle02: "#393939",
  borderSubtle03: "#525252",
  borderStrong01: "#6f6f6f",
  borderStrong02: "#8d8d8d",
  borderStrong03: "#6f6f6f",
  borderDisabled: "#393939",
  skeletonBackground: "#292929",
  skeletonElement: "#393939"
}, Vn = {
  white: Me,
  g10: an,
  g90: De,
  g100: rn
}, xe = {
  sans: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif",
  serif: "'IBM Plex Serif', 'Georgia', Times, serif",
  mono: "'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",
  sansCondensed: "'IBM Plex Sans Condensed', 'Helvetica Neue', Arial, sans-serif"
}, Kn = {
  light: 300,
  regular: 400,
  semibold: 600
}, qn = [
  12,
  14,
  16,
  18,
  20,
  24,
  28,
  32,
  36,
  42,
  48,
  54,
  60,
  68,
  76,
  84,
  92,
  102,
  112,
  122,
  132,
  144,
  156
], Un = {
  label01: { fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.33333, letterSpacing: "0.32px" },
  label02: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.28572, letterSpacing: "0.16px" },
  helperText01: { fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.33333, letterSpacing: "0.32px" },
  helperText02: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.28572, letterSpacing: "0.16px" },
  bodyCompact01: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.28572, letterSpacing: "0.16px" },
  bodyCompact02: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.375, letterSpacing: "0px" },
  body01: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.42857, letterSpacing: "0.16px" },
  body02: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5, letterSpacing: "0px" },
  code01: { fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.33333, letterSpacing: "0.32px", fontFamily: xe.mono },
  code02: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.42857, letterSpacing: "0.32px", fontFamily: xe.mono },
  headingCompact01: { fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.28572, letterSpacing: "0.16px" },
  headingCompact02: { fontSize: "1rem", fontWeight: 600, lineHeight: 1.375, letterSpacing: "0px" },
  heading03: { fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.4, letterSpacing: "0px" },
  heading04: { fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.28572, letterSpacing: "0px" },
  heading05: { fontSize: "2rem", fontWeight: 400, lineHeight: 1.25, letterSpacing: "0px" },
  heading06: { fontSize: "2.625rem", fontWeight: 300, lineHeight: 1.199, letterSpacing: "0px" },
  heading07: { fontSize: "3.375rem", fontWeight: 300, lineHeight: 1.199, letterSpacing: "0px" }
}, Yn = 8, Jn = {
  spacing01: "0.125rem",
  // 2px
  spacing02: "0.25rem",
  // 4px
  spacing03: "0.5rem",
  // 8px
  spacing04: "0.75rem",
  // 12px
  spacing05: "1rem",
  // 16px
  spacing06: "1.5rem",
  // 24px
  spacing07: "2rem",
  // 32px
  spacing08: "2.5rem",
  // 40px
  spacing09: "3rem",
  // 48px
  spacing10: "4rem",
  // 64px
  spacing11: "5rem",
  // 80px
  spacing12: "6rem",
  // 96px
  spacing13: "10rem"
  // 160px
}, Qn = {
  xs: "1.5rem",
  // 24px
  sm: "2rem",
  // 32px
  md: "2.5rem",
  // 40px
  lg: "3rem",
  // 48px
  xl: "4rem",
  // 64px
  "2xl": "5rem"
  // 80px
}, Xn = {
  sm: "1rem",
  // 16px
  md: "1.25rem"
  // 20px
}, Zn = {
  fast01: "70ms",
  fast02: "110ms",
  moderate01: "150ms",
  moderate02: "240ms",
  slow01: "400ms",
  slow02: "700ms"
}, et = {
  standard: {
    productive: "cubic-bezier(0.2, 0, 0.38, 0.9)",
    expressive: "cubic-bezier(0.4, 0.14, 0.3, 1)"
  },
  entrance: {
    productive: "cubic-bezier(0, 0, 0.38, 0.9)",
    expressive: "cubic-bezier(0, 0, 0.3, 1)"
  },
  exit: {
    productive: "cubic-bezier(0.2, 0, 1, 0.9)",
    expressive: "cubic-bezier(0.4, 0.14, 1, 1)"
  }
}, nt = {
  sm: { width: "20rem", columns: 4, margin: "0" },
  // 320px
  md: { width: "42rem", columns: 8, margin: "1rem" },
  // 672px
  lg: { width: "66rem", columns: 16, margin: "1rem" },
  // 1056px
  xlg: { width: "82rem", columns: 16, margin: "1rem" },
  // 1312px
  max: { width: "99rem", columns: 16, margin: "1.5rem" }
  // 1584px
};
export {
  Tn as Accordion,
  Cn as AccordionItem,
  hn as Breadcrumb,
  pn as BreadcrumbItem,
  un as Button,
  Xe as Checkbox,
  vn as CheckboxGroup,
  nn as Dropdown,
  wn as InlineNotification,
  bn as Link,
  mn as Loading,
  xn as Modal,
  Ne as RadioButton,
  yn as RadioButtonGroup,
  Sn as Tab,
  kn as TabList,
  In as TabPanel,
  Bn as TabPanels,
  Nn as Tabs,
  gn as Tag,
  Qe as TextInput,
  fn as ThemeProvider,
  _n as ToastNotification,
  Ze as Toggle,
  An as Tooltip,
  zn as black,
  Pn as blue,
  nt as breakpoints,
  Qn as containerSizes,
  On as coolGray,
  Wn as cyan,
  Zn as duration,
  et as easings,
  xe as fontFamilies,
  Kn as fontWeights,
  rn as g100Theme,
  an as g10Theme,
  De as g90Theme,
  Fn as gray,
  jn as green,
  Xn as iconSizes,
  En as magenta,
  Yn as miniUnit,
  Dn as orange,
  Ln as purple,
  $n as red,
  Jn as spacing,
  Rn as teal,
  Vn as themes,
  qn as typeScale,
  Un as typeStyles,
  dn as useTheme,
  Gn as warmGray,
  Hn as white,
  Me as whiteTheme,
  Mn as yellow
};
