this.podle = this.podle || {}, this.podle.bundle = function(e) {
	"use strict";

	function a(e) {
		return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function s(e, a) {
		if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
	}

	function t(e, a) {
		for (var s = 0; s < a.length; s++) {
			var t = a[s];
			t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
		}
	}

	function o(e, a, s) {
		return a && t(e.prototype, a), s && t(e, s), e
	}

	function n(e, a, s) {
		return a in e ? Object.defineProperty(e, a, {
			value: s,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[a] = s, e
	}

	function r(e, a) {
		if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(a && a.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), a && l(e, a)
	}

	function i(e) {
		return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function l(e, a) {
		return (l = Object.setPrototypeOf || function(e, a) {
			return e.__proto__ = a, e
		})(e, a)
	}

	function d() {
		if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
		if (Reflect.construct.sham) return !1;
		if ("function" == typeof Proxy) return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
		} catch (e) {
			return !1
		}
	}

	function u(e, a, s) {
		return (u = d() ? Reflect.construct : function(e, a, s) {
			var t = [null];
			t.push.apply(t, a);
			var o = new(Function.bind.apply(e, t));
			return s && l(o, s.prototype), o
		}).apply(null, arguments)
	}

	function c(e) {
		var a = "function" == typeof Map ? new Map : void 0;
		return (c = function(e) {
			if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
			var s;
			if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
			if (void 0 !== a) {
				if (a.has(e)) return a.get(e);
				a.set(e, t)
			}

			function t() {
				return u(e, arguments, i(this).constructor)
			}
			return t.prototype = Object.create(e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), l(t, e)
		})(e)
	}

	function p(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function m(e, a) {
		return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
	}

	function h(e) {
		var a = d();
		return function() {
			var s, t = i(e);
			if (a) {
				var o = i(this).constructor;
				s = Reflect.construct(t, arguments, o)
			} else s = t.apply(this, arguments);
			return m(this, s)
		}
	}

	function y(e, a) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, a) {
			var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == s) return;
			var t, o, n = [],
				r = !0,
				i = !1;
			try {
				for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0);
			} catch (e) {
				i = !0, o = e
			} finally {
				try {
					r || null == s.return || s.return()
				} finally {
					if (i) throw o
				}
			}
			return n
		}(e, a) || b(e, a) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function g(e) {
		return function(e) {
			if (Array.isArray(e)) return f(e)
		}(e) || function(e) {
			if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
		}(e) || b(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function b(e, a) {
		if (e) {
			if ("string" == typeof e) return f(e, a);
			var s = Object.prototype.toString.call(e).slice(8, -1);
			return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
		}
	}

	function f(e, a) {
		(null == a || a > e.length) && (a = e.length);
		for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
		return t
	}
	var k = document.createElement("template");
	k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
	var v = function(e) {
		r(t, e);
		var a = h(t);

		function t() {
			var e;
			return s(this, t), n(p(e = a.call(this)), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({
				mode: "open"
			}), e
		}
		return o(t, [{
			key: "last",
			set: function(e) {
				this._last = e
			}
		}, {
			key: "connectedCallback",
			value: function() {
				var e = this;
				this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function(a) {
					"PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
						bubbles: !0,
						composed: !0
					}))), e._render()
				})), this._render()
			}
		}, {
			key: "attributeChangedCallback",
			value: function(e, a, s) {
				switch (e) {
					case "letter":
						if (s === a) break;
						var t = "null" === s ? "" : s;
						this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
						break;
					case "evaluation":
						if (!s) break;
						this._state = s;
						break;
					case "reveal":
						this._animation = "flip-in", this._reveal = !0
				}
				this._render()
			}
		}, {
			key: "_render",
			value: function() {
				this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
			}
		}], [{
			key: "observedAttributes",
			get: function() {
				return ["letter", "evaluation", "reveal"]
			}
		}]), t
	}(c(HTMLElement));
	customElements.define("game-tile", v);
	var w = document.createElement("template");
	w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
	var x = function(e) {
		r(t, e);
		var a = h(t);

		function t() {
			var e;
			return s(this, t), (e = a.call(this)).attachShadow({
				mode: "open"
			}), e._letters = "", e._evaluation = [], e._length, e
		}
		return o(t, [{
			key: "evaluation",
			get: function() {
				return this._evaluation
			},
			set: function(e) {
				var a = this;
				this._evaluation = e, this.$tiles && this.$tiles.forEach((function(e, s) {
					e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function() {
						e.setAttribute("reveal", "")
					}), 300 * s)
				}))
			}
		}, {
			key: "connectedCallback",
			value: function() {
				var e = this;
				this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
				for (var a = function(a) {
						var s = document.createElement("game-tile"),
							t = e._letters[a];
						(t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() {
							s.setAttribute("reveal", "")
						}), 100 * a));
						a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
					}, s = 0; s < this._length; s++) a(s);
				this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function(a) {
					"Shake" === a.animationName && e.removeAttribute("invalid")
				}))
			}
		}, {
			key: "attributeChangedCallback",
			value: function(e, a, s) {
				switch (e) {
					case "letters":
						this._letters = s || "";
						break;
					case "length":
						this._length = parseInt(s, 10);
						break;
					case "win":
						if (null === s) {
							this.$tiles.forEach((function(e) {
								e.classList.remove("win")
							}));
							break
						}
						this.$tiles.forEach((function(e, a) {
							e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
						}))
				}
				this._render()
			}
		}, {
			key: "_render",
			value: function() {
				var e = this;
				this.$row && this.$tiles.forEach((function(a, s) {
					var t = e._letters[s];
					t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
				}))
			}
		}], [{
			key: "observedAttributes",
			get: function() {
				return ["letters", "length", "invalid", "win"]
			}
		}]), t
	}(c(HTMLElement));
	customElements.define("game-row", x);
	var z = document.createElement("template");
	z.innerHTML = "\n  <slot></slot>\n";
	var j = "darkTheme",
		S = "colorBlindTheme",
		_ = function(e) {
			r(t, e);
			var a = h(t);

			function t() {
				var e;
				s(this, t), n(p(e = a.call(this)), "isDarkTheme", !1), n(p(e), "isColorBlindTheme", !1), e.attachShadow({
					mode: "open"
				});
				var o = JSON.parse(window.localStorage.getItem(j)),
					r = window.matchMedia("(prefers-color-scheme: dark)").matches,
					i = JSON.parse(window.localStorage.getItem(S));
				return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
			}
			return o(t, [{
				key: "setDarkTheme",
				value: function(e) {
					var a = document.querySelector("body");
					e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
				}
			}, {
				key: "setColorBlindTheme",
				value: function(e) {
					var a = document.querySelector("body");
					e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
				}
			}, {
				key: "connectedCallback",
				value: function() {
					var e = this;
					this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
						var s = a.detail,
							t = s.name,
							o = s.checked;
						switch (t) {
							case "dark-theme":
								return void e.setDarkTheme(o);
							case "color-blind-theme":
								return void e.setColorBlindTheme(o)
						}
					}))
				}
			}]), t
		}(c(HTMLElement));

	function q(e, a) {
		return e === a || e != e && a != a
	}

	function E(e, a) {
		for (var s = e.length; s--;)
			if (q(e[s][0], a)) return s;
		return -1
	}
	customElements.define("game-theme-manager", _);
	var A = Array.prototype.splice;

	function C(e) {
		var a = -1,
			s = null == e ? 0 : e.length;
		for (this.clear(); ++a < s;) {
			var t = e[a];
			this.set(t[0], t[1])
		}
	}
	C.prototype.clear = function() {
		this.__data__ = [], this.size = 0
	}, C.prototype.delete = function(e) {
		var a = this.__data__,
			s = E(a, e);
		return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
	}, C.prototype.get = function(e) {
		var a = this.__data__,
			s = E(a, e);
		return s < 0 ? void 0 : a[s][1]
	}, C.prototype.has = function(e) {
		return E(this.__data__, e) > -1
	}, C.prototype.set = function(e, a) {
		var s = this.__data__,
			t = E(s, e);
		return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
	};
	var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
		T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
		I = L || T || Function("return this")(),
		M = I.Symbol,
		O = Object.prototype,
		R = O.hasOwnProperty,
		P = O.toString,
		$ = M ? M.toStringTag : void 0;
	var H = Object.prototype.toString;
	var N = M ? M.toStringTag : void 0;

	function D(e) {
		return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function(e) {
			var a = R.call(e, $),
				s = e[$];
			try {
				e[$] = void 0;
				var t = !0
			} catch (e) {}
			var o = P.call(e);
			return t && (a ? e[$] = s : delete e[$]), o
		}(e) : function(e) {
			return H.call(e)
		}(e)
	}

	function G(e) {
		var s = a(e);
		return null != e && ("object" == s || "function" == s)
	}

	function B(e) {
		if (!G(e)) return !1;
		var a = D(e);
		return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
	}
	var F, W = I["__core-js_shared__"],
		Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
	var J = Function.prototype.toString;
	var U = /^\[object .+?Constructor\]$/,
		X = Function.prototype,
		V = Object.prototype,
		K = X.toString,
		Q = V.hasOwnProperty,
		Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

	function ee(e) {
		return !(!G(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function(e) {
			if (null != e) {
				try {
					return J.call(e)
				} catch (e) {}
				try {
					return e + ""
				} catch (e) {}
			}
			return ""
		}(e));
		var a
	}

	function ae(e, a) {
		var s = function(e, a) {
			return null == e ? void 0 : e[a]
		}(e, a);
		return ee(s) ? s : void 0
	}
	var se = ae(I, "Map"),
		te = ae(Object, "create");
	var oe = Object.prototype.hasOwnProperty;
	var ne = Object.prototype.hasOwnProperty;

	function re(e) {
		var a = -1,
			s = null == e ? 0 : e.length;
		for (this.clear(); ++a < s;) {
			var t = e[a];
			this.set(t[0], t[1])
		}
	}

	function ie(e, s) {
		var t, o, n = e.__data__;
		return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
	}

	function le(e) {
		var a = -1,
			s = null == e ? 0 : e.length;
		for (this.clear(); ++a < s;) {
			var t = e[a];
			this.set(t[0], t[1])
		}
	}
	re.prototype.clear = function() {
		this.__data__ = te ? te(null) : {}, this.size = 0
	}, re.prototype.delete = function(e) {
		var a = this.has(e) && delete this.__data__[e];
		return this.size -= a ? 1 : 0, a
	}, re.prototype.get = function(e) {
		var a = this.__data__;
		if (te) {
			var s = a[e];
			return "__lodash_hash_undefined__" === s ? void 0 : s
		}
		return oe.call(a, e) ? a[e] : void 0
	}, re.prototype.has = function(e) {
		var a = this.__data__;
		return te ? void 0 !== a[e] : ne.call(a, e)
	}, re.prototype.set = function(e, a) {
		var s = this.__data__;
		return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
	}, le.prototype.clear = function() {
		this.size = 0, this.__data__ = {
			hash: new re,
			map: new(se || C),
			string: new re
		}
	}, le.prototype.delete = function(e) {
		var a = ie(this, e).delete(e);
		return this.size -= a ? 1 : 0, a
	}, le.prototype.get = function(e) {
		return ie(this, e).get(e)
	}, le.prototype.has = function(e) {
		return ie(this, e).has(e)
	}, le.prototype.set = function(e, a) {
		var s = ie(this, e),
			t = s.size;
		return s.set(e, a), this.size += s.size == t ? 0 : 1, this
	};

	function de(e) {
		var a = this.__data__ = new C(e);
		this.size = a.size
	}
	de.prototype.clear = function() {
		this.__data__ = new C, this.size = 0
	}, de.prototype.delete = function(e) {
		var a = this.__data__,
			s = a.delete(e);
		return this.size = a.size, s
	}, de.prototype.get = function(e) {
		return this.__data__.get(e)
	}, de.prototype.has = function(e) {
		return this.__data__.has(e)
	}, de.prototype.set = function(e, a) {
		var s = this.__data__;
		if (s instanceof C) {
			var t = s.__data__;
			if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
			s = this.__data__ = new le(t)
		}
		return s.set(e, a), this.size = s.size, this
	};
	var ue = function() {
		try {
			var e = ae(Object, "defineProperty");
			return e({}, "", {}), e
		} catch (e) {}
	}();

	function ce(e, a, s) {
		"__proto__" == a && ue ? ue(e, a, {
			configurable: !0,
			enumerable: !0,
			value: s,
			writable: !0
		}) : e[a] = s
	}

	function pe(e, a, s) {
		(void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
	}
	var me, he = function(e, a, s) {
			for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
				var i = n[me ? r : ++t];
				if (!1 === a(o[i], i, o)) break
			}
			return e
		},
		ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
		ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
		be = ge && ge.exports === ye ? I.Buffer : void 0,
		fe = be ? be.allocUnsafe : void 0;
	var ke = I.Uint8Array;

	function ve(e, a) {
		var s, t, o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
		return new e.constructor(o, e.byteOffset, e.length)
	}
	var we = Object.create,
		xe = function() {
			function e() {}
			return function(a) {
				if (!G(a)) return {};
				if (we) return we(a);
				e.prototype = a;
				var s = new e;
				return e.prototype = void 0, s
			}
		}();
	var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function(e) {
			return ze(je(e))
		}),
		_e = Object.prototype;

	function qe(e) {
		var a = e && e.constructor;
		return e === ("function" == typeof a && a.prototype || _e)
	}

	function Ee(e) {
		return null != e && "object" == a(e)
	}

	function Ae(e) {
		return Ee(e) && "[object Arguments]" == D(e)
	}
	var Ce = Object.prototype,
		Le = Ce.hasOwnProperty,
		Te = Ce.propertyIsEnumerable,
		Ie = Ae(function() {
			return arguments
		}()) ? Ae : function(e) {
			return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
		},
		Me = Array.isArray;

	function Oe(e) {
		return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
	}

	function Re(e) {
		return null != e && Oe(e.length) && !B(e)
	}
	var Pe = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
		$e = Pe && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
		He = $e && $e.exports === Pe ? I.Buffer : void 0,
		Ne = (He ? He.isBuffer : void 0) || function() {
			return !1
		},
		De = Function.prototype,
		Ge = Object.prototype,
		Be = De.toString,
		Fe = Ge.hasOwnProperty,
		We = Be.call(Object);
	var Ye = {};
	Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0, Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
	var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
		Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
		Xe = Ue && Ue.exports === Je && L.process,
		Ve = function() {
			try {
				var e = Ue && Ue.require && Ue.require("util").types;
				return e || Xe && Xe.binding && Xe.binding("util")
			} catch (e) {}
		}(),
		Ke = Ve && Ve.isTypedArray,
		Qe = Ke ? function(e) {
			return function(a) {
				return e(a)
			}
		}(Ke) : function(e) {
			return Ee(e) && Oe(e.length) && !!Ye[D(e)]
		};

	function Ze(e, a) {
		if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
	}
	var ea = Object.prototype.hasOwnProperty;

	function aa(e, a, s) {
		var t = e[a];
		ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
	}
	var sa = /^(?:0|[1-9]\d*)$/;

	function ta(e, s) {
		var t = a(e);
		return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
	}
	var oa = Object.prototype.hasOwnProperty;

	function na(e, a) {
		var s = Me(e),
			t = !s && Ie(e),
			o = !s && !t && Ne(e),
			n = !s && !t && !o && Qe(e),
			r = s || t || o || n,
			i = r ? function(e, a) {
				for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
				return t
			}(e.length, String) : [],
			l = i.length;
		for (var d in e) !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
		return i
	}
	var ra = Object.prototype.hasOwnProperty;

	function ia(e) {
		if (!G(e)) return function(e) {
			var a = [];
			if (null != e)
				for (var s in Object(e)) a.push(s);
			return a
		}(e);
		var a = qe(e),
			s = [];
		for (var t in e)("constructor" != t || !a && ra.call(e, t)) && s.push(t);
		return s
	}

	function la(e) {
		return Re(e) ? na(e, !0) : ia(e)
	}

	function da(e) {
		return function(e, a, s, t) {
			var o = !s;
			s || (s = {});
			for (var n = -1, r = a.length; ++n < r;) {
				var i = a[n],
					l = t ? t(s[i], e[i], i, s, e) : void 0;
				void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l)
			}
			return s
		}(e, la(e))
	}

	function ua(e, a, s, t, o, n, r) {
		var i = Ze(e, s),
			l = Ze(a, s),
			d = r.get(l);
		if (d) pe(e, s, d);
		else {
			var u, c = n ? n(i, l, s + "", e, a, r) : void 0,
				p = void 0 === c;
			if (p) {
				var m = Me(l),
					h = !m && Ne(l),
					y = !m && !h && Qe(l);
				c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
					var s = -1,
						t = e.length;
					for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
					return a
				}(i) : h ? (p = !1, c = function(e, a) {
					if (a) return e.slice();
					var s = e.length,
						t = fe ? fe(s) : new e.constructor(s);
					return e.copy(t), t
				}(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function(e) {
					if (!Ee(e) || "[object Object]" != D(e)) return !1;
					var a = Se(e);
					if (null === a) return !0;
					var s = Fe.call(a, "constructor") && a.constructor;
					return "function" == typeof s && s instanceof s && Be.call(s) == We
				}(l) || Ie(l) ? (c = i, Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function(e) {
					return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
				}(l))) : p = !1
			}
			p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c)
		}
	}

	function ca(e, a, s, t, o) {
		e !== a && he(a, (function(n, r) {
			if (o || (o = new de), G(n)) ua(e, a, r, s, ca, t, o);
			else {
				var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
				void 0 === i && (i = n), pe(e, r, i)
			}
		}), la)
	}

	function pa(e) {
		return e
	}

	function ma(e, a, s) {
		switch (s.length) {
			case 0:
				return e.call(a);
			case 1:
				return e.call(a, s[0]);
			case 2:
				return e.call(a, s[0], s[1]);
			case 3:
				return e.call(a, s[0], s[1], s[2])
		}
		return e.apply(a, s)
	}
	var ha = Math.max;
	var ya = ue ? function(e, a) {
			return ue(e, "toString", {
				configurable: !0,
				enumerable: !1,
				value: (s = a, function() {
					return s
				}),
				writable: !0
			});
			var s
		} : pa,
		ga = Date.now;
	var ba = function(e) {
		var a = 0,
			s = 0;
		return function() {
			var t = ga(),
				o = 16 - (t - s);
			if (s = t, o > 0) {
				if (++a >= 800) return arguments[0]
			} else a = 0;
			return e.apply(void 0, arguments)
		}
	}(ya);

	function fa(e, a) {
		return ba(function(e, a, s) {
			return a = ha(void 0 === a ? e.length - 1 : a, 0),
				function() {
					for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;) r[o] = t[a + o];
					o = -1;
					for (var i = Array(a + 1); ++o < a;) i[o] = t[o];
					return i[a] = s(r), ma(e, this, i)
				}
		}(e, a, pa), e + "")
	}
	var ka, va = (ka = function(e, a, s) {
			ca(e, a, s)
		}, fa((function(e, s) {
			var t = -1,
				o = s.length,
				n = o > 1 ? s[o - 1] : void 0,
				r = o > 2 ? s[2] : void 0;
			for (n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0, r && function(e, s, t) {
					if (!G(t)) return !1;
					var o = a(s);
					return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
				}(s[0], s[1], r) && (n = o < 3 ? void 0 : n, o = 1), e = Object(e); ++t < o;) {
				var i = s[t];
				i && ka(e, i, t, n)
			}
			return e
		}))),
		wa = "gameState",
		xa = {
			boardState: null,
			evaluations: null,
			rowIndex: null,
			solution: null,
			gameStatus: null,
			lastPlayedTs: null,
			lastCompletedTs: null,
			restoringFromLocalStorage: null,
			hardMode: !1
		};

	function za() {
		var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
		return JSON.parse(e)
	}

	function ja(e) {
		var a = za();
		! function(e) {
			window.localStorage.setItem(wa, JSON.stringify(e))
		}(va(a, e))
	}
	var Sa = document.createElement("template");
	Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">FOSS Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Color Blind Mode</div>\n          <div class="description">High contrast colors</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n                    |\n                  </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div>\n            <div id="copyright">Copyright 2021-2022. All Rights Reserved.</div>\n    </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
	var _a = function(e) {
		r(t, e);
		var a = h(t);

		function t() {
			var e;
			return s(this, t), n(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({
				mode: "open"
			}), e
		}
		return o(t, [{
			key: "connectedCallback",
			value: function() {
				var e, a = this;
				this.shadowRoot.appendChild(Sa.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.podle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function(e) {
					e.stopPropagation();
					var s = e.detail,
						t = s.name,
						o = s.checked,
						n = s.disabled;
					a.dispatchEvent(new CustomEvent("game-setting-change", {
						bubbles: !0,
						composed: !0,
						detail: {
							name: t,
							checked: o,
							disabled: n
						}
					})), a.render()
				})), this.render()
			}
		}, {
			key: "render",
			value: function() {
				var e = document.querySelector("body");
				e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
				var a = za();
				a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
			}
		}]), t
	}(c(HTMLElement));
	customElements.define("game-settings", _a);
	var qa = document.createElement("template");
	qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
	var Ea, Aa = function(e) {
		r(t, e);
		var a = h(t);

		function t() {
			var e;
			return s(this, t), n(p(e = a.call(this)), "_duration", void 0), e.attachShadow({
				mode: "open"
			}), e
		}
		return o(t, [{
			key: "connectedCallback",
			value: function() {
				var e = this;
				this.shadowRoot.appendChild(qa.content.cloneNode(!0));
				var a = this.shadowRoot.querySelector(".toast");
				a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function() {
					a.classList.add("fade")
				}), this._duration), a.addEventListener("transitionend", (function(a) {
					e.parentNode.removeChild(e)
				}))
			}
		}]), t
	}(c(HTMLElement));

	function Ca() {
		dataLayer.push(arguments)
	}
	customElements.define("game-toast", Aa), window.dataLayer = window.dataLayer || [], Ca("js", new Date);
	Ca("config", "G-2SSGMHY3NP", {
		app_version: null === (Ea = window.podle) || void 0 === Ea ? void 0 : Ea.hash,
		debug_mode: !1
	});
	var La = ["tech ", "will ", "tech ", "brad ", "pod  ", "and  ", "made ", "brad ", "made ", "brad ", "pod  ", "made ", "pod  ", "made ", "a    ", "pod  ", "tech ", "pod  ", "tech ", "brad ", "made ", "a    ", "brad ", "will ", "tech ", "pod  ", "made ", "and  ", "brad ", "and  ", "tech ", "made ", "made ", "and  ", "brad ", "podle", "pod  ", "brad ", "and  ", "and  ", "brad ", "a    ", "and  ", "will ", "pod  ", "and  ", "will ", "will ", "made ", "will ", "will ", "and  ", "pod  ", "made ", "brad ", "and  ", "tech ", "brad ", "tech ", "a    ", "and  ", "and  ", "and  ", "brad ", "and  ", "will ", "pod  ", "and  ", "and  ", "pod  ", "a    ", "brad ", "will ", "brad ", "tech ", "tech ", "pod  ", "will ", "and  ", "pod  ", "made ", "made ", "pod  ", "brad ", "brad ", "made ", "will ", "will ", "tech ", "tech ", "made ", "a    ", "made ", "a    ", "tech ", "brad ", "pod  ", "tech ", "will ", "tech ", "brad ", "and  ", "a    ", "tech ", "a    ", "brad ", "will ", "pod  ", "will ", "made ", "a    ", "tech ", "and  ", "tech ", "and  ", "brad ", "tech ", "a    ", "will ", "will ", "brad ", "a    ", "pod  ", "pod  ", "brad ", "a    ", "tech ", "tech ", "brad ", "a    ", "and  ", "tech ", "pod  ", "tech ", "tech ", "a    ", "tech ", "podle", "brad ", "a    ", "made ", "pod  ", "tech ", "tech ", "a    ", "tech ", "will ", "will ", "made ", "tech ", "brad ", "a    ", "made ", "and  ", "and  ", "brad ", "a    ", "tech ", "brad ", "and  ", "and  ", "a    ", "tech ", "a    ", "and  ", "will ", "brad ", "pod  ", "and  ", "a    ", "pod  ", "pod  ", "a    ", "and  ", "a    ", "a    ", "made ", "tech ", "a    ", "pod  ", "will ", "and  ", "tech ", "brad ", "a    ", "pod  ", "and  ", "made ", "and  ", "brad ", "tech ", "pod  ", "and  ", "will ", "brad ", "tech ", "made ", "a    ", "brad ", "brad ", "made ", "tech ", "made ", "tech ", "will ", "made ", "a    ", "and  ", "made ", "brad ", "tech ", "made ", "pod  ", "brad ", "will ", "a    ", "will ", "brad ", "pod  ", "a    ", "pod  ", "a    ", "pod  ", "brad ", "tech ", "and  ", "pod  ", "pod  ", "a    ", "brad ", "a    ", "brad ", "will ", "made ", "made ", "made ", "made ", "foss ", "sweat", "a    ", "head ", "nas  ", "ware ", "brad ", "tech ", "wang ", "time ", "foss ", "brad ", "sweat", "tape ", "and  ", "open ", "nas  ", "brad ", "shoe ", "time ", "soft ", "nas  ", "pod  ", "smith", "brad ", "tech ", "will ", "time ", "nas  ", "ware ", "free ", "maker", "time ", "soft ", "tech ", "head ", "made ", "time ", "skoot", "pants", "tape ", "nas  ", "pants", "tech ", "zones", "soft ", "and  ", "will ", "ware ", "smith", "nas  ", "pod  ", "will ", "zones", "pod  ", "shoe ", "open ", "a    ", "nas  ", "tech ", "podle", "free ", "pants", "will ", "time ", "head ", "brad ", "open ", "head ", "pants", "nas  ", "time ", "skoot", "maker", "tape ", "soft ", "maker", "pants", "zones", "shoe ", "made ", "tape ", "podle", "free ", "soft ", "shoe ", "zones", "nano ", "kevin", "a    ", "free ", "foss ", "a    ", "head ", "brad ", "pants", "brad ", "nano ", "pod  ", "shoe ", "tech ", "ware ", "pod  ", "and  ", "free ", "time ", "head ", "shoe ", "ware ", "head ", "ware ", "foss ", "pants", "will ", "lamp ", "free ", "shoe ", "lamp ", "tape ", "tech ", "open ", "tech ", "norm ", "head ", "will ", "pants", "foss ", "smith", "tech ", "brad ", "and  ", "brad ", "a    ", "soft ", "pod  ", "shoe ", "nas  ", "sweat", "zones", "head ", "zawa ", "brad ", "podle", "smith", "skoot", "zones", "podle", "made ", "sweat", "smith", "head ", "and  ", "zones", "head ", "tape ", "foss ", "pod  ", "zones", "pants", "made ", "bears", "foss ", "shoe ", "open ", "free ", "pants", "tech ", "pants", "a    ", "pants", "foss ", "a    ", "sweat", "shoe ", "tech ", "soft ", "a    ", "tech ", "a    ", "sweat", "lamp ", "pants", "a    ", "nas  ", "tech ", "nas  ", "tape ", "ware ", "head ", "soft ", "time ", "podle", "tape ", "smith", "skoot", "pants", "time ", "pod  ", "brad ", "head ", "soft ", "open ", "ware ", "podle", "soft ", "free ", "lamp ", "norm ", "will ", "tape ", "tech ", "podle", "time ", "head ", "zones", "smith", "ware ", "podle", "pants", "made ", "zawa ", "nas  ", "free ", "nas  ", "made ", "podle", "shoe ", "time ", "maker", "podle", "nano ", "pants", "pod  ", "a    ", "tech ", "time ", "nano ", "free ", "brad ", "time ", "and  ", "free ", "foss ", "a    ", "soft ", "open ", "zones", "soft ", "pants", "a    ", "open ", "brad ", "will ", "smith", "lamp ", "pants", "podle", "nano ", "foss ", "ware ", "a    ", "shoe ", "zawa ", "time ", "shoe ", "zawa ", "sweat", "shoe ", "nano ", "shoe ", "maker", "zones", "open ", "soft ", "nas  ", "ware ", "free ", "time ", "a    ", "maker", "pants", "will ", "smith", "pants", "nano ", "shoe ", "sweat", "free ", "sweat", "open ", "foss ", "and  ", "free ", "and  ", "shoe ", "lamp ", "pants", "pod  ", "a    ", "foss ", "pod  ", "made ", "bears", "nano ", "and  ", "brad ", "zones", "head ", "nas  ", "a    ", "head ", "open ", "will ", "lamp ", "tech ", "will ", "podle", "kevin", "shoe ", "soft ", "and  ", "head ", "maker", "skoot", "soft ", "a    ", "pants", "sweat", "tape ", "head ", "time ", "tape ", "shoe ", "lamp ", "pants", "norm ", "and  ", "made ", "smith", "tape ", "foss ", "lamp ", "zones", "free ", "pants", "tech ", "a    ", "ware ", "foss ", "maker", "lamp ", "nano ", "brad ", "smith", "open ", "kevin", "lamp ", "time ", "maker", "pants", "soft ", "pants", "free ", "nas  ", "podle", "smith", "open ", "made ", "brad ", "free ", "shoe ", "zawa ", "and  ", "maker", "open ", "foss ", "and  ", "shoe ", "tech ", "maker", "pod  ", "free ", "zones", "nas  ", "pod  ", "a    ", "tech ", "maker", "shoe ", "lamp ", "shoe ", "head ", "skoot", "sweat", "tech ", "zones", "lamp ", "sweat", "maker", "time ", "nano ", "podle", "lamp ", "ware ", "head ", "tape ", "made ", "a    ", "shoe ", "and  ", "brad ", "shoe ", "tech ", "sweat", "brad ", "lamp ", "brad ", "time ", "lamp ", "soft ", "nas  ", "foss ", "ware ", "sweat", "shoe ", "ware ", "brad ", "lamp ", "zones", "shoe ", "open ", "norm ", "maker", "pants", "time ", "and  ", "nano ", "free ", "zones", "tech ", "kevin", "head ", "soft ", "bears", "smith", "pod  ", "nas  ", "open ", "nas  ", "zones", "time ", "tech ", "made ", "smith", "zones", "and  ", "made ", "and  ", "foss ", "tape ", "nas  ", "time ", "foss ", "maker", "podle", "brad ", "pants", "will ", "maker", "foss ", "sweat", "pants", "free ", "head ", "zones", "and  ", "pants", "brad ", "tape ", "pod  ", "open ", "pants", "open ", "tape ", "time ", "ware ", "and  ", "open ", "tape ", "tech ", "shoe ", "foss ", "smith", "open ", "nano ", "sweat", "open ", "ware ", "lamp ", "nano ", "sweat", "podle", "will ", "tape ", "podle", "made ", "tape ", "brad ", "and  ", "zones", "soft ", "shoe ", "made ", "lamp ", "open ", "made ", "nas  ", "time ", "a    ", "brad ", "podle", "sweat", "tape ", "head ", "lamp ", "nano ", "sweat", "shoe ", "nas  ", "soft ", "bears", "soft ", "shoe ", "brad ", "soft ", "time ", "ware ", "podle", "nas  ", "made ", "head ", "nas  ", "tech ", "zones", "lamp ", "tape ", "sweat", "tape ", "zones", "brad ", "made ", "ware ", "lamp ", "norm ", "head ", "maker", "free ", "tech ", "nas  ", "head ", "nano ", "free ", "pants", "brad ", "tech ", "nano ", "smith", "tech ", "nano ", "pants", "and  ", "nas  ", "open ", "smith", "and  ", "ware ", "time ", "maker", "foss ", "lamp ", "brad ", "podle", "pod  ", "tech ", "time ", "tech ", "maker", "pants", "soft ", "podle", "and  ", "a    ", "soft ", "maker", "pod  ", "and  ", "zones", "soft ", "podle", "zones", "time ", "ware ", "head ", "ware ", "will ", "skoot", "will ", "sweat", "zones", "lamp ", "maker", "zones", "sweat", "a    ", "tape ", "sweat", "time ", "zones", "head ", "shoe ", "maker", "smith", "head ", "a    ", "nano ", "open ", "norm ", "pants", "podle", "and  ", "nas  ", "pants", "open ", "a    ", "zones", "sweat", "a    ", "soft ", "smith", "sweat", "will ", "head ", "open ", "brad ", "made ", "open ", "and  ", "free ", "open ", "shoe ", "sweat", "a    ", "pants", "pod  ", "head ", "nas  ", "shoe ", "ware ", "smith", "shoe ", "zones", "open ", "lamp ", "brad ", "smith", "soft ", "free ", "pants", "and  ", "tape ", "norm ", "time ", "bears", "shoe ", "nano ", "norm ", "maker", "norm ", "ware ", "soft ", "free ", "nas  ", "open ", "smith", "made ", "maker", "time ", "foss ", "time ", "lamp ", "shoe ", "lamp ", "smith", "soft ", "pants", "and  ", "open ", "will ", "shoe ", "free ", "sweat", "foss ", "head ", "tech ", "free ", "made ", "head ", "free ", "will ", "pants", "will ", "open ", "soft ", "sweat", "made ", "a    ", "foss ", "time ", "will ", "ware ", "made ", "smith", "will ", "sweat", "brad ", "maker", "will ", "head ", "zones", "tech ", "zones", "nano ", "shoe ", "kevin", "head ", "nas  ", "free ", "norm ", "foss ", "nas  ", "free ", "soft ", "head ", "ware ", "time ", "free ", "and  ", "shoe ", "zones", "nas  ", "open ", "tape ", "soft ", "lamp ", "pants", "and  ", "a    ", "podle", "a    ", "podle", "kevin", "zawa ", "nano ", "ware ", "sweat", "free ", "podle", "maker", "tape ", "podle", "foss ", "and  ", "maker", "nas  ", "brad ", "made ", "tape ", "and  ", "nas  ", "shoe ", "a    ", "smith", "pants", "smith", "brad ", "soft ", "smith", "free ", "tech ", "and  ", "brad ", "made ", "sweat", "made ", "maker", "nano ", "nas  ", "and  ", "time ", "maker", "podle", "pod  ", "head ", "tech ", "maker", "smith", "nano ", "free ", "made ", "smith", "tape ", "nano ", "tech ", "podle", "tech ", "zones", "head ", "lamp ", "zones", "lamp ", "pod  ", "free ", "tape ", "made ", "zawa ", "shoe ", "brad ", "skoot", "nano ", "brad ", "nas  ", "time ", "zones", "and  ", "open ", "time ", "tech ", "pod  ", "brad ", "smith", "made ", "brad ", "lamp ", "pants", "time ", "foss ", "time ", "nano ", "ware ", "and  ", "head ", "shoe ", "open ", "and  ", "head ", "and  ", "nano ", "pod  ", "tape ", "foss ", "soft ", "nano ", "ware ", "nas  ", "free ", "pants", "tech ", "soft ", "will ", "and  ", "maker", "soft ", "shoe ", "pants", "a    ", "pants", "nas  ", "zones", "foss ", "maker", "ware ", "bears", "tape ", "head ", "open ", "made ", "free ", "norm ", "open ", "soft ", "a    ", "and  ", "zones", "podle", "nas  ", "zones", "tape ", "nano ", "pants", "pod  ", "free ", "maker", "head ", "pod  ", "tape ", "pod  ", "brad ", "podle", "nano ", "foss ", "head ", "brad ", "head ", "open ", "time ", "shoe ", "soft ", "head ", "shoe ", "free ", "and  ", "pod  ", "open ", "nano ", "soft ", "lamp ", "podle", "open ", "will ", "tape ", "free ", "brad ", "pants", "foss ", "sweat", "pants", "will ", "brad ", "shoe ", "podle", "will ", "tape ", "made ", "lamp ", "smith", "pants", "tape ", "foss ", "will ", "pod  ", "podle", "head ", "ware ", "bears", "tape ", "pod  ", "shoe ", "pod  ", "time ", "brad ", "made ", "skoot", "will ", "free ", "tape ", "tech ", "podle", "nano ", "brad ", "and  ", "open ", "tape ", "nano ", "smith", "head ", "and  ", "nano ", "smith", "tape ", "lamp ", "open ", "smith", "kevin", "shoe ", "lamp ", "shoe ", "lamp ", "brad ", "a    ", "norm ", "open ", "zones", "ware ", "tape ", "maker", "smith", "sweat", "and  ", "sweat", "nas  ", "will ", "sweat", "free ", "pod  ", "lamp ", "nas  ", "time ", "smith", "and  ", "podle", "brad ", "nano ", "made ", "tape ", "foss ", "free ", "maker", "nano ", "time ", "pod  ", "foss ", "made ", "open ", "maker", "foss ", "ware ", "podle", "open ", "tape ", "nano ", "and  ", "nano ", "ware ", "made ", "head ", "zones", "zawa ", "pants", "zones", "time ", "zawa ", "shoe ", "nas  ", "made ", "time ", "maker", "pants", "time ", "ware ", "norm ", "will ", "tech ", "lamp ", "podle", "will ", "pants", "zones", "will ", "pod  ", "sweat", "made ", "sweat", "and  ", "will ", "zones", "free ", "maker", "smith", "shoe ", "nano ", "open ", "made ", "brad ", "zones", "free ", "sweat", "podle", "zones", "head ", "brad ", "nano ", "sweat", "ware ", "sweat", "open ", "nano ", "free ", "shoe ", "pod  ", "head ", "maker", "head ", "lamp ", "zones", "foss ", "shoe ", "tape ", "and  ", "smith", "will ", "soft ", "head ", "podle", "nas  ", "tape ", "lamp ", "brad ", "time ", "open ", "smith", "maker", "sweat", "smith", "open ", "nano ", "smith", "nas  ", "podle", "brad ", "maker", "tech ", "soft ", "sweat", "a    ", "and  ", "nano ", "kevin", "free ", "foss ", "brad ", "ware ", "brad ", "nano ", "brad ", "pod  ", "will ", "open ", "zones", "ware ", "head ", "pants", "nas  ", "a    ", "will ", "shoe ", "nas  ", "smith", "maker", "zones", "nas  ", "a    ", "ware ", "time ", "tech ", "shoe ", "smith", "ware ", "and  ", "zones", "nas  ", "open ", "brad ", "sweat", "ware ", "sweat", "shoe ", "zones", "brad ", "a    ", "smith", "free ", "open ", "smith", "tech ", "lamp ", "nas  ", "free ", "brad ", "and  ", "time ", "head ", "foss ", "sweat", "ware ", "a    ", "skoot", "time ", "lamp ", "brad ", "will ", "nas  ", "lamp ", "podle", "tech ", "foss ", "pod  ", "made ", "nas  ", "head ", "sweat", "zones", "time ", "tape ", "podle", "nas  ", "sweat", "time ", "tape ", "time ", "foss ", "smith", "pod  ", "brad ", "zones", "free ", "lamp ", "podle", "soft ", "brad ", "foss ", "brad ", "podle", "pod  ", "pants", "shoe ", "nas  ", "nano ", "zawa ", "lamp ", "tech ", "podle", "smith", "tape ", "foss ", "sweat", "bears", "sweat", "time ", "free ", "podle", "maker", "made ", "head ", "podle", "and  ", "maker", "foss ", "sweat", "made ", "nas  ", "nano ", "open ", "pants", "brad ", "shoe ", "time ", "brad ", "will ", "pants", "and  ", "lamp ", "smith", "lamp ", "brad ", "a    ", "nano ", "pants", "time ", "a    ", "and  ", "nas  ", "podle", "brad ", "ware ", "nas  ", "pants", "made ", "brad ", "podle", "pod  ", "head ", "tape ", "shoe ", "nano ", "podle", "pants", "a    ", "nas  ", "shoe ", "tape ", "ware ", "a    ", "maker", "nas  ", "shoe ", "time ", "smith", "tech ", "and  ", "maker", "kevin", "zones", "ware ", "head ", "time ", "open ", "and  ", "made ", "will ", "smith", "pants", "will ", "time ", "made ", "zones", "made ", "shoe ", "tape ", "soft ", "podle", "soft ", "free ", "and  ", "made ", "zones", "brad ", "podle", "zones", "a    ", "pants", "shoe ", "soft ", "open ", "ware ", "foss ", "and  ", "tech ", "zones", "podle", "smith", "tech ", "open ", "smith", "sweat", "ware ", "smith", "sweat", "made ", "lamp ", "pants", "soft ", "tech ", "maker", "nas  ", "head ", "ware ", "sweat", "nas  ", "zones", "ware ", "will ", "shoe ", "and  ", "open ", "maker", "norm ", "a    ", "head ", "and  ", "soft ", "maker", "nano ", "free ", "pod  ", "will ", "brad ", "maker", "lamp ", "open ", "lamp ", "time ", "nas  ", "open ", "time ", "pants", "tech ", "ware ", "head ", "soft ", "a    ", "will ", "and  ", "soft ", "nano ", "a    ", "tech ", "free ", "made ", "time ", "zones", "pod  ", "shoe ", "ware ", "shoe ", "head ", "open ", "pants", "tape ", "and  ", "tech ", "foss ", "time ", "lamp ", "pod  ", "nano ", "head ", "zones", "podle", "kevin", "lamp ", "nano ", "brad ", "open ", "a    ", "free ", "open ", "will ", "free ", "smith", "pod  ", "free ", "time ", "made ", "pants", "ware ", "open ", "zawa ", "tech ", "pod  ", "time ", "nas  ", "a    ", "free ", "foss ", "nano ", "sweat", "time ", "smith", "brad ", "pants", "bears", "ware ", "pod  ", "maker", "sweat", "lamp ", "open ", "smith", "pants", "brad ", "podle", "made ", "brad ", "ware ", "shoe ", "ware ", "tech ", "free ", "tech ", "time ", "sweat", "time ", "soft ", "podle", "open ", "brad ", "a    ", "sweat", "ware ", "sweat", "soft ", "zones", "podle", "tape ", "smith", "skoot", "made ", "zones", "smith", "foss ", "tape ", "podle", "nas  ", "will ", "free ", "a    ", "shoe ", "a    ", "shoe ", "made ", "soft ", "head ", "skoot", "a    ", "maker", "and  ", "soft ", "foss ", "open ", "a    ", "sweat", "and  ", "zones", "lamp ", "podle", "will ", "zones", "pants", "nano ", "pod  ", "sweat", "time ", "nas  ", "a    ", "nas  ", "a    ", "made ", "tape ", "lamp ", "shoe ", "and  ", "nas  ", "shoe ", "smith", "foss ", "time ", "made ", "maker", "head ", "pants", "lamp ", "will ", "norm ", "head ", "shoe ", "free ", "lamp ", "head ", "shoe ", "podle", "zones", "soft ", "nas  ", "maker", "tape ", "lamp ", "free ", "tech ", "open ", "nano ", "podle", "foss ", "head ", "shoe ", "free ", "will ", "lamp ", "will ", "shoe ", "tape ", "head ", "smith", "head ", "a    ", "ware ", "will ", "nas  ", "brad ", "made ", "free ", "foss ", "a    ", "zones", "made ", "ware ", "lamp ", "free ", "head ", "smith", "head ", "brad ", "tape ", "head ", "nano ", "made ", "will ", "a    ", "ware ", "will ", "nas  ", "open ", "ware ", "soft ", "sweat", "pants", "head ", "lamp ", "tech ", "ware ", "lamp ", "and  ", "maker", "pants", "will ", "sweat", "pod  ", "brad ", "tape ", "sweat", "open ", "sweat", "foss ", "zones", "tape ", "smith", "sweat", "tech ", "brad ", "and  ", "tape ", "soft ", "shoe ", "zones", "ware ", "zawa ", "zones", "soft ", "time ", "podle", "a    ", "tech ", "open ", "brad ", "shoe ", "lamp ", "podle", "foss ", "nas  ", "zones", "free ", "zones", "tape ", "head ", "made ", "podle", "head ", "tape ", "shoe ", "tape ", "foss ", "shoe ", "will ", "lamp ", "brad ", "lamp ", "tech ", "lamp ", "bears", "tech ", "and  ", "made ", "pod  ", "nas  ", "tech ", "tape ", "head ", "pants", "kevin", "head ", "nas  ", "and  ", "pants", "made ", "head ", "time ", "zawa ", "sweat", "podle", "pants", "and  ", "smith", "made ", "free ", "sweat", "soft ", "lamp ", "open ", "soft ", "free ", "made ", "time ", "zones", "podle", "shoe ", "tech ", "zones", "podle", "open ", "made ", "will ", "zones", "a    ", "free ", "head ", "maker", "will ", "brad ", "and  ", "tech ", "pod  ", "a    ", "tape ", "tech ", "zawa ", "soft ", "nas  ", "open ", "pants", "a    ", "nano ", "free ", "tape ", "smith", "maker", "brad ", "soft ", "pod  ", "shoe ", "soft ", "sweat", "lamp ", "maker", "bears", "soft ", "lamp ", "tape ", "tech ", "tape ", "ware ", "will ", "sweat", "head ", "time ", "open ", "sweat", "podle", "pants", "smith", "maker", "will ", "a    ", "bears", "brad ", "time ", "head ", "brad ", "smith", "podle", "nano ", "will ", "open ", "pants", "free ", "foss ", "tech ", "brad ", "lamp ", "ware ", "tech ", "zones", "tape ", "a    ", "podle", "shoe ", "nano ", "smith", "will ", "open ", "lamp ", "and  ", "shoe ", "lamp ", "and  ", "shoe ", "time ", "free ", "podle", "maker", "open ", "head ", "brad ", "pants", "kevin", "smith", "nas  ", "will ", "maker", "nas  ", "foss ", "soft ", "nano ", "open ", "lamp ", "free ", "made ", "and  ", "sweat", "soft ", "a    ", "pants", "tape ", "time ", "tech ", "smith", "shoe ", "foss ", "open ", "lamp ", "head ", "pod  ", "foss ", "lamp ", "pants", "soft ", "tape ", "soft ", "lamp ", "free ", "podle", "smith", "shoe ", "skoot", "free ", "and  ", "lamp ", "sweat", "time ", "lamp ", "pod  ", "open ", "shoe ", "maker", "open ", "head ", "lamp ", "pants", "podle", "nas  ", "zones", "nano ", "time ", "ware ", "will ", "tape ", "kevin", "lamp ", "and  ", "tech ", "open ", "tech ", "podle", "brad ", "pants", "smith", "and  ", "time ", "soft ", "will ", "nas  ", "lamp ", "a    ", "pants", "and  ", "zones", "a    ", "head ", "will ", "maker", "soft ", "shoe ", "nas  ", "maker", "lamp ", "time ", "nano ", "podle", "shoe ", "zones", "a    ", "shoe ", "pod  ", "maker", "ware ", "shoe ", "tape ", "made ", "shoe ", "head ", "foss ", "nas  ", "tape ", "tech ", "zones", "will ", "open ", "maker", "tech ", "foss ", "brad ", "head ", "foss ", "tech ", "smith", "foss ", "open ", "soft ", "open ", "a    ", "nano ", "smith", "podle", "pants", "foss ", "a    ", "maker", "nano ", "nas  ", "foss ", "maker", "lamp ", "pants", "foss ", "time ", "maker", "tech ", "ware ", "shoe ", "pod  ", "shoe ", "head ", "shoe ", "head ", "time ", "open ", "maker", "nano ", "sweat", "kevin", "foss ", "tech ", "smith", "and  ", "maker", "free ", "time ", "shoe ", "pants", "made ", "lamp ", "soft ", "smith", "maker", "nano ", "sweat", "nano ", "maker", "brad ", "zones", "lamp ", "zones", "soft ", "zones", "shoe ", "foss ", "open ", "ware ", "made ", "maker", "foss ", "brad ", "soft ", "lamp ", "head ", "tape ", "made ", "nano ", "a    ", "shoe ", "podle", "tape ", "maker", "will ", "brad ", "open ", "maker", "open ", "zones", "and  ", "foss ", "pants", "will ", "nas  ", "ware ", "maker", "free ", "soft ", "pants", "soft ", "nano ", "made ", "tech ", "and  ", "soft ", "time ", "pants", "soft ", "foss ", "ware ", "a    ", "nano ", "and  ", "open ", "made ", "pod  ", "time ", "pants", "podle", "head ", "zawa ", "foss ", "time ", "sweat", "nas  ", "tech ", "tape ", "tech ", "lamp ", "open ", "tech ", "made ", "maker", "zones", "tape ", "a    ", "head ", "foss ", "nano ", "brad ", "a    ", "free ", "nano ", "a    ", "made ", "brad ", "maker", "pants", "open ", "brad ", "time ", "smith", "open ", "brad ", "head ", "nano ", "brad ", "head ", "lamp ", "open ", "kevin"],
		Ta = ["a    ", "aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "aback", "abacs", "abaft", "abaka", "abamp", "aband", "abase", "abash", "abask", "abate", "abaya", "abbas", "abbed", "abbes", "abbey", "abbot", "abcee", "abeam", "abear", "abele", "abers", "abets", "abhor", "abide", "abies", "abled", "abler", "ables", "ablet", "ablow", "abmho", "abode", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "abort", "about", "above", "abram", "abray", "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abuse", "abuts", "abuzz", "abyes", "abysm", "abyss", "acais", "acari", "accas", "accoy", "acerb", "acers", "aceta", "achar", "ached", "aches", "achoo", "acids", "acidy", "acing", "acini", "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acold", "acorn", "acred", "acres", "acrid", "acros", "acted", "actin", "acton", "actor", "acute", "acyls", "adage", "adapt", "adaws", "adays", "adbot", "addax", "added", "adder", "addio", "addle", "adeem", "adept", "adhan", "adieu", "adios", "adits", "adman", "admen", "admin", "admit", "admix", "adobe", "adobo", "adopt", "adore", "adorn", "adown", "adoze", "adrad", "adred", "adsum", "aduki", "adult", "adunc", "adust", "advew", "adyta", "adzed", "adzes", "aecia", "aedes", "aegis", "aeons", "aerie", "aeros", "aesir", "afald", "afara", "afars", "afear", "affix", "afire", "aflaj", "afoot", "afore", "afoul", "afrit", "afros", "after", "again", "agama", "agami", "agape", "agars", "agast", "agate", "agave", "agaze", "agene", "agent", "agers", "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agila", "agile", "aging", "agios", "agism", "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglow", "aglus", "agmas", "agoge", "agone", "agons", "agony", "agood", "agora", "agree", "agria", "agrin", "agros", "agued", "agues", "aguna", "aguti", "ahead", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahull", "ahuru", "aidas", "aided", "aider", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "aimed", "aimer", "ainee", "ainga", "aioli", "aired", "airer", "airns", "airth", "airts", "aisle", "aitch", "aitus", "aiver", "aiyee", "aizle", "ajies", "ajiva", "ajuga", "ajwan", "akees", "akela", "akene", "aking", "akita", "akkas", "alaap", "alack", "alamo", "aland", "alane", "alang", "alans", "alant", "alapa", "alaps", "alarm", "alary", "alate", "alays", "albas", "albee", "album", "alcid", "alcos", "aldea", "alder", "aldol", "aleck", "alecs", "alefs", "aleft", "aleph", "alert", "alews", "aleye", "alfas", "algae", "algal", "algas", "algid", "algin", "algor", "algum", "alias", "alibi", "alien", "alifs", "align", "alike", "aline", "alist", "alive", "aliya", "alkie", "alkos", "alkyd", "alkyl", "allay", "allee", "allel", "alley", "allis", "allod", "allot", "allow", "alloy", "allyl", "almah", "almas", "almeh", "almes", "almud", "almug", "alods", "aloed", "aloes", "aloft", "aloha", "aloin", "alone", "along", "aloof", "aloos", "aloud", "alowe", "alpha", "altar", "alter", "altho", "altos", "alula", "alums", "alure", "alvar", "alway", "amahs", "amain", "amass", "amate", "amaut", "amaze", "amban", "amber", "ambit", "amble", "ambos", "ambry", "ameba", "ameer", "amend", "amene", "amens", "ament", "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", "amino", "amins", "amirs", "amiss", "amity", "amlas", "amman", "ammon", "ammos", "amnia", "amnic", "amnio", "amoks", "amole", "among", "amort", "amour", "amove", "amowt", "amped", "ample", "amply", "ampul", "amrit", "amuck", "amuse", "amyls", "anana", "anata", "ancho", "ancle", "ancon", "and  ", "andro", "anear", "anele", "anent", "angas", "angel", "anger", "angle", "anglo", "angry", "angst", "anigh", "anile", "anils", "anima", "anime", "animi", "anion", "anise", "anker", "ankhs", "ankle", "ankus", "anlas", "annal", "annas", "annat", "annex", "annoy", "annul", "anoas", "anode", "anole", "anomy", "ansae", "antae", "antar", "antas", "anted", "antes", "antic", "antis", "antra", "antre", "antsy", "anura", "anvil", "anyon", "aorta", "apace", "apage", "apaid", "apart", "apayd", "apays", "apeak", "apeek", "apers", "apert", "apery", "apgar", "aphid", "aphis", "apian", "aping", "apiol", "apish", "apism", "apnea", "apode", "apods", "apoop", "aport", "appal", "appay", "appel", "apple", "apply", "appro", "appui", "appuy", "apres", "apron", "apses", "apsis", "apsos", "apted", "apter", "aptly", "aquae", "aquas", "araba", "araks", "arame", "arars", "arbas", "arbor", "arced", "archi", "arcos", "arcus", "ardeb", "ardor", "ardri", "aread", "areae", "areal", "arear", "areas", "areca", "aredd", "arede", "arefy", "areic", "arena", "arene", "arepa", "arere", "arete", "arets", "arett", "argal", "argan", "argil", "argle", "argol", "argon", "argot", "argue", "argus", "arhat", "arias", "ariel", "ariki", "arils", "ariot", "arise", "arish", "arked", "arled", "arles", "armed", "armer", "armet", "armil", "armor", "arnas", "arnut", "aroba", "aroha", "aroid", "aroma", "arose", "arpas", "arpen", "arrah", "arras", "array", "arret", "arris", "arrow", "arroz", "arsed", "arses", "arsey", "arsis", "arson", "artal", "artel", "artic", "artis", "artsy", "aruhe", "arums", "arval", "arvee", "arvos", "aryls", "asana", "ascon", "ascot", "ascus", "asdic", "ashed", "ashen", "ashes", "ashet", "aside", "asked", "asker", "askew", "askoi", "askos", "aspen", "asper", "aspic", "aspie", "aspis", "aspro", "assai", "assam", "assay", "asses", "asset", "assez", "assot", "aster", "astir", "astun", "asura", "asway", "aswim", "asyla", "ataps", "ataxy", "atigi", "atilt", "atimy", "atlas", "atman", "atmas", "atmos", "atocs", "atoke", "atoks", "atoll", "atoms", "atomy", "atone", "atony", "atopy", "atria", "atrip", "attap", "attar", "attic", "atuas", "audad", "audio", "audit", "auger", "aught", "augur", "aulas", "aulic", "auloi", "aulos", "aumil", "aunes", "aunts", "aunty", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric", "auris", "aurum", "autos", "auxin", "avail", "avale", "avant", "avast", "avels", "avens", "avers", "avert", "avgas", "avian", "avine", "avion", "avise", "aviso", "avize", "avoid", "avows", "avyze", "await", "awake", "award", "aware", "awarn", "awash", "awato", "awave", "aways", "awdls", "aweel", "aweto", "awful", "awing", "awmry", "awned", "awner", "awoke", "awols", "awork", "axels", "axial", "axile", "axils", "axing", "axiom", "axion", "axite", "axled", "axles", "axman", "axmen", "axoid", "axone", "axons", "ayahs", "ayaya", "ayelp", "aygre", "ayins", "ayont", "ayres", "ayrie", "azans", "azide", "azido", "azine", "azlon", "azoic", "azole", "azons", "azote", "azoth", "azuki", "azure", "azurn", "azury", "azygy", "azyme", "azyms", "baaed", "baals", "babas", "babel", "babes", "babka", "baboo", "babul", "babus", "bacca", "bacco", "baccy", "bacha", "bachs", "backs", "bacon", "baddy", "badge", "badly", "baels", "baffs", "baffy", "bafts", "bagel", "baggy", "baghs", "bagie", "bahts", "bahus", "bahut", "bails", "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajra", "bajri", "bajus", "baked", "baken", "baker", "bakes", "bakra", "balas", "balds", "baldy", "baled", "baler", "bales", "balks", "balky", "balls", "bally", "balms", "balmy", "baloo", "balsa", "balti", "balun", "balus", "bambi", "banak", "banal", "banco", "bancs", "banda", "bandh", "bands", "bandy", "baned", "banes", "bangs", "bania", "banjo", "banks", "banns", "bants", "bantu", "banty", "banya", "bapus", "barbe", "barbs", "barby", "barca", "barde", "bardo", "bards", "bardy", "bared", "barer", "bares", "barfi", "barfs", "barge", "baric", "barks", "barky", "barms", "barmy", "barns", "barny", "baron", "barps", "barra", "barre", "barro", "barry", "barye", "basal", "basan", "based", "basen", "baser", "bases", "basho", "basic", "basij", "basil", "basin", "basis", "basks", "bason", "basse", "bassi", "basso", "bassy", "basta", "baste", "basti", "basto", "basts", "batch", "bated", "bates", "bathe", "baths", "batik", "baton", "batta", "batts", "battu", "batty", "bauds", "bauks", "baulk", "baurs", "bavin", "bawds", "bawdy", "bawks", "bawls", "bawns", "bawrs", "bawty", "bayed", "bayer", "bayes", "bayle", "bayou", "bayts", "bazar", "bazoo", "beach", "beads", "beady", "beaks", "beaky", "beals", "beams", "beamy", "beano", "beans", "beany", "beard", "beare", "bears", "beast", "beath", "beats", "beaty", "beaus", "beaut", "beaux", "bebop", "becap", "becke", "becks", "bedad", "bedel", "bedes", "bedew", "bedim", "bedye", "beech", "beedi", "beefs", "beefy", "beeps", "beers", "beery", "beets", "befit", "befog", "begad", "began", "begar", "begat", "begem", "beget", "begin", "begot", "begum", "begun", "beige", "beigy", "being", "beins", "bekah", "belah", "belar", "belay", "belch", "belee", "belga", "belie", "belle", "bells", "belly", "belon", "below", "belts", "bemad", "bemas", "bemix", "bemud", "bench", "bends", "bendy", "benes", "benet", "benga", "benis", "benne", "benni", "benny", "bento", "bents", "benty", "bepat", "beray", "beres", "beret", "bergs", "berko", "berks", "berme", "berms", "berob", "berry", "berth", "beryl", "besat", "besaw", "besee", "beses", "beset", "besit", "besom", "besot", "besti", "bests", "betas", "beted", "betel", "betes", "beths", "betid", "beton", "betta", "betty", "bevel", "bever", "bevor", "bevue", "bevvy", "bewet", "bewig", "bezel", "bezes", "bezil", "bezzy", "bhais", "bhaji", "bhang", "bhats", "bhels", "bhoot", "bhuna", "bhuts", "biach", "biali", "bialy", "bibbs", "bibes", "bible", "biccy", "bicep", "bices", "biddy", "bided", "bider", "bides", "bidet", "bidis", "bidon", "bield", "biers", "biffo", "biffs", "biffy", "bifid", "bigae", "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bigot", "bijou", "biked", "biker", "bikes", "bikie", "bilbo", "bilby", "biled", "biles", "bilge", "bilgy", "bilks", "bills", "billy", "bimah", "bimas", "bimbo", "binal", "bindi", "binds", "biner", "bines", "binge", "bingo", "bings", "bingy", "binit", "binks", "bints", "biogs", "biome", "biont", "biota", "biped", "bipod", "birch", "birds", "birks", "birle", "birls", "biros", "birrs", "birse", "birsy", "birth", "bises", "bisks", "bisom", "bison", "bitch", "biter", "bites", "bitos", "bitou", "bitsy", "bitte", "bitts", "bitty", "bivia", "bivvy", "bizes", "bizzo", "bizzy", "blabs", "black", "blade", "blads", "blady", "blaer", "blaes", "blaff", "blags", "blahs", "blain", "blame", "blams", "bland", "blank", "blare", "blart", "blase", "blash", "blast", "blate", "blats", "blatt", "blaud", "blawn", "blaws", "blays", "blaze", "bleak", "blear", "bleat", "blebs", "blech", "bleed", "bleep", "blees", "blend", "blent", "blert", "bless", "blest", "blets", "bleys", "blimp", "blimy", "blind", "bling", "blini", "blink", "blins", "bliny", "blips", "bliss", "blist", "blite", "blits", "blitz", "blive", "bloat", "blobs", "block", "blocs", "blogs", "bloke", "blond", "blood", "blook", "bloom", "bloop", "blore", "blots", "blown", "blows", "blowy", "blubs", "blude", "bluds", "bludy", "blued", "bluer", "blues", "bluet", "bluey", "bluff", "bluid", "blume", "blunk", "blunt", "blurb", "blurs", "blurt", "blush", "blype", "boabs", "boaks", "board", "boars", "boart", "boast", "boats", "bobac", "bobak", "bobas", "bobby", "bobol", "bobos", "bocca", "bocce", "bocci", "boche", "bocks", "boded", "bodes", "bodge", "bodhi", "bodle", "boeps", "boets", "boeuf", "boffo", "boffs", "bogan", "bogey", "boggy", "bogie", "bogle", "bogue", "bogus", "bohea", "bohos", "boils", "boing", "boink", "boite", "boked", "bokeh", "bokes", "bokos", "bolar", "bolas", "bolds", "boles", "bolix", "bolls", "bolos", "bolts", "bolus", "bomas", "bombe", "bombo", "bombs", "bonce", "bonds", "boned", "boner", "bones", "boney", "bongo", "bongs", "bonie", "bonks", "bonne", "bonny", "bonus", "bonza", "bonze", "booai", "booay", "boobs", "booby", "boody", "booed", "boofy", "boogy", "boohs", "books", "booky", "bools", "booms", "boomy", "boong", "boons", "boord", "boors", "boose", "boost", "booth", "boots", "booty", "booze", "boozy", "boppy", "borak", "boral", "boras", "borax", "borde", "bords", "bored", "boree", "borel", "borer", "bores", "borgo", "boric", "borks", "borms", "borna", "borne", "boron", "borts", "borty", "bortz", "bosie", "bosks", "bosky", "bosom", "boson", "bossy", "bosun", "botas", "botch", "botel", "botes", "bothy", "botte", "botts", "botty", "bouge", "bough", "bouks", "boule", "boult", "bound", "bouns", "bourd", "bourg", "bourn", "bouse", "bousy", "bouts", "bovid", "bowat", "bowed", "bowel", "bower", "bowes", "bowet", "bowie", "bowls", "bowne", "bowrs", "bowse", "boxed", "boxen", "boxer", "boxes", "boxla", "boxty", "boyar", "boyau", "boyed", "boyfs", "boygs", "boyla", "boyos", "boysy", "bozos", "braai", "brace", "brach", "brack", "bract", "brad ", "brads", "braes", "brags", "braid", "brail", "brain", "brake", "braks", "braky", "brame", "brand", "brane", "brank", "brans", "brant", "brash", "brass", "brast", "brats", "brava", "brave", "bravi", "bravo", "brawl", "brawn", "braws", "braxy", "brays", "braza", "braze", "bread", "break", "bream", "brede", "breds", "breed", "breem", "breer", "brees", "breid", "breis", "breme", "brens", "brent", "brere", "brers", "breve", "brews", "breys", "briar", "bribe", "brick", "bride", "brief", "brier", "bries", "brigs", "briki", "briks", "brill", "brims", "brine", "bring", "brink", "brins", "briny", "brios", "brise", "brisk", "briss", "brith", "brits", "britt", "brize", "broad", "broch", "brock", "brods", "brogh", "brogs", "broil", "broke", "brome", "bromo", "bronc", "brond", "brood", "brook", "brool", "broom", "broos", "brose", "brosy", "broth", "brown", "brows", "brugh", "bruin", "bruit", "brule", "brume", "brung", "brunt", "brush", "brusk", "brust", "brute", "bruts", "buats", "buaze", "bubal", "bubas", "bubba", "bubbe", "bubby", "bubus", "buchu", "bucko", "bucks", "bucku", "budas", "buddy", "budge", "budis", "budos", "buffa", "buffe", "buffi", "buffo", "buffs", "buffy", "bufos", "bufty", "buggy", "bugle", "buhls", "buhrs", "buiks", "build", "built", "buist", "bukes", "bulbs", "bulge", "bulgy", "bulks", "bulky", "bulla", "bulls", "bully", "bulse", "bumbo", "bumfs", "bumph", "bumps", "bumpy", "bunas", "bunce", "bunch", "bunco", "bunde", "bundh", "bunds", "bundt", "bundu", "bundy", "bungs", "bungy", "bunia", "bunje", "bunjy", "bunko", "bunks", "bunns", "bunny", "bunts", "bunty", "bunya", "buoys", "buppy", "buran", "buras", "burbs", "burds", "buret", "burfi", "burgh", "burgs", "burin", "burka", "burke", "burks", "burls", "burly", "burns", "burnt", "buroo", "burps", "burqa", "burro", "burrs", "burry", "bursa", "burse", "burst", "busby", "bused", "buses", "bushy", "busks", "busky", "bussu", "busti", "busts", "busty", "butch", "buteo", "butes", "butle", "butoh", "butte", "butts", "butty", "butut", "butyl", "buxom", "buyer", "buzzy", "bwana", "bwazi", "byded", "bydes", "byked", "bykes", "bylaw", "byres", "byrls", "byssi", "bytes", "byway", "caaed", "cabal", "cabas", "cabby", "caber", "cabin", "cable", "cabob", "caboc", "cabre", "cacao", "cacas", "cache", "cacks", "cacky", "cacti", "caddy", "cadee", "cades", "cadet", "cadge", "cadgy", "cadie", "cadis", "cadre", "caeca", "caese", "cafes", "caffs", "caged", "cager", "cages", "cagey", "cagot", "cahow", "caids", "cains", "caird", "cairn", "cajon", "cajun", "caked", "cakes", "cakey", "calfs", "calid", "calif", "calix", "calks", "calla", "calls", "calms", "calmy", "calos", "calpa", "calps", "calve", "calyx", "caman", "camas", "camel", "cameo", "cames", "camis", "camos", "campi", "campo", "camps", "campy", "camus", "canal", "candy", "caned", "caneh", "caner", "canes", "cangs", "canid", "canna", "canns", "canny", "canoe", "canon", "canso", "canst", "canto", "cants", "canty", "capas", "caped", "caper", "capes", "capex", "caphs", "capiz", "caple", "capon", "capos", "capot", "capri", "capul", "caput", "carap", "carat", "carbo", "carbs", "carby", "cardi", "cards", "cardy", "cared", "carer", "cares", "caret", "carex", "cargo", "carks", "carle", "carls", "carns", "carny", "carob", "carol", "carom", "caron", "carpi", "carps", "carrs", "carry", "carse", "carta", "carte", "carts", "carve", "carvy", "casas", "casco", "cased", "cases", "casks", "casky", "caste", "casts", "casus", "catch", "cater", "cates", "catty", "cauda", "cauks", "cauld", "caulk", "cauls", "caums", "caups", "cauri", "causa", "cause", "cavas", "caved", "cavel", "caver", "caves", "cavie", "cavil", "cawed", "cawks", "caxon", "cease", "ceaze", "cebid", "cecal", "cecum", "cedar", "ceded", "ceder", "cedes", "cedis", "ceiba", "ceili", "ceils", "celeb", "cella", "celli", "cello", "cells", "celom", "celts", "cense", "cento", "cents", "centu", "ceorl", "cepes", "cerci", "cered", "ceres", "cerge", "ceria", "ceric", "cerne", "ceroc", "ceros", "certs", "certy", "cesse", "cesta", "cesti", "cetes", "cetyl", "cezve", "chace", "chack", "chaco", "chado", "chads", "chafe", "chaff", "chaft", "chain", "chair", "chais", "chalk", "chals", "champ", "chams", "chana", "chang", "chank", "chant", "chaos", "chape", "chaps", "chapt", "chara", "chard", "chare", "chark", "charm", "charr", "chars", "chart", "chary", "chase", "chasm", "chats", "chave", "chavs", "chawk", "chaws", "chaya", "chays", "cheap", "cheat", "check", "cheek", "cheep", "cheer", "chefs", "cheka", "chela", "chelp", "chemo", "chems", "chere", "chert", "chess", "chest", "cheth", "chevy", "chews", "chewy", "chiao", "chias", "chibs", "chica", "chich", "chick", "chico", "chics", "chide", "chief", "chiel", "chiks", "child", "chile", "chili", "chill", "chimb", "chime", "chimo", "chimp", "china", "chine", "ching", "chink", "chino", "chins", "chips", "chirk", "chirl", "chirm", "chiro", "chirp", "chirr", "chirt", "chiru", "chits", "chive", "chivs", "chivy", "chizz", "chock", "choco", "chocs", "chode", "chogs", "choil", "choir", "choke", "choko", "choky", "chola", "choli", "cholo", "chomp", "chons", "choof", "chook", "choom", "choon", "chops", "chord", "chore", "chose", "chota", "chott", "chout", "choux", "chowk", "chows", "chubs", "chuck", "chufa", "chuff", "chugs", "chump", "chums", "chunk", "churl", "churn", "churr", "chuse", "chute", "chuts", "chyle", "chyme", "chynd", "cibol", "cided", "cider", "cides", "ciels", "cigar", "ciggy", "cilia", "cills", "cimar", "cimex", "cinch", "cinct", "cines", "cinqs", "cions", "cippi", "circa", "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cists", "cital", "cited", "citer", "cites", "cives", "civet", "civic", "civie", "civil", "civvy", "clach", "clack", "clade", "clads", "claes", "clags", "claim", "clame", "clamp", "clams", "clang", "clank", "clans", "claps", "clapt", "claro", "clart", "clary", "clash", "clasp", "class", "clast", "clats", "claut", "clave", "clavi", "claws", "clays", "clean", "clear", "cleat", "cleck", "cleek", "cleep", "clefs", "cleft", "clegs", "cleik", "clems", "clepe", "clept", "clerk", "cleve", "clews", "click", "clied", "clies", "cliff", "clift", "climb", "clime", "cline", "cling", "clink", "clint", "clipe", "clips", "clipt", "clits", "cloak", "cloam", "clock", "clods", "cloff", "clogs", "cloke", "clomb", "clomp", "clone", "clonk", "clons", "cloop", "cloot", "clops", "close", "clote", "cloth", "clots", "cloud", "clour", "clous", "clout", "clove", "clown", "clows", "cloye", "cloys", "cloze", "clubs", "cluck", "clued", "clues", "cluey", "clump", "clung", "clunk", "clype", "cnida", "coach", "coact", "coady", "coala", "coals", "coaly", "coapt", "coarb", "coast", "coate", "coati", "coats", "cobbs", "cobby", "cobia", "coble", "cobra", "cobza", "cocas", "cocci", "cocco", "cocks", "cocky", "cocoa", "cocos", "codas", "codec", "coded", "coden", "coder", "codes", "codex", "codon", "coeds", "coffs", "cogie", "cogon", "cogue", "cohab", "cohen", "cohoe", "cohog", "cohos", "coifs", "coign", "coils", "coins", "coirs", "coits", "coked", "cokes", "colas", "colby", "colds", "coled", "coles", "coley", "colic", "colin", "colls", "colly", "colog", "colon", "color", "colts", "colza", "comae", "comal", "comas", "combe", "combi", "combo", "combs", "comby", "comer", "comes", "comet", "comfy", "comic", "comix", "comma", "commo", "comms", "commy", "compo", "comps", "compt", "comte", "comus", "conch", "condo", "coned", "cones", "coney", "confs", "conga", "conge", "congo", "conia", "conic", "conin", "conks", "conky", "conne", "conns", "conte", "conto", "conus", "convo", "cooch", "cooed", "cooee", "cooer", "cooey", "coofs", "cooks", "cooky", "cools", "cooly", "coomb", "cooms", "coomy", "coons", "coops", "coopt", "coost", "coots", "cooze", "copal", "copay", "coped", "copen", "coper", "copes", "coppy", "copra", "copse", "copsy", "coqui", "coral", "coram", "corbe", "corby", "cords", "cored", "corer", "cores", "corey", "corgi", "coria", "corks", "corky", "corms", "corni", "corno", "corns", "cornu", "corny", "corps", "corse", "corso", "cosec", "cosed", "coses", "coset", "cosey", "cosie", "costa", "coste", "costs", "cotan", "coted", "cotes", "coths", "cotta", "cotts", "couch", "coude", "cough", "could", "count", "coupe", "coups", "courb", "courd", "coure", "cours", "court", "couta", "couth", "coved", "coven", "cover", "coves", "covet", "covey", "covin", "cowal", "cowan", "cowed", "cower", "cowks", "cowls", "cowps", "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyau", "coyed", "coyer", "coyly", "coypu", "cozed", "cozen", "cozes", "cozey", "cozie", "craal", "crabs", "crack", "craft", "crags", "craic", "craig", "crake", "crame", "cramp", "crams", "crane", "crank", "crans", "crape", "craps", "crapy", "crare", "crash", "crass", "crate", "crave", "crawl", "craws", "crays", "craze", "crazy", "creak", "cream", "credo", "creds", "creed", "creek", "creel", "creep", "crees", "creme", "crems", "crena", "crepe", "creps", "crept", "crepy", "cress", "crest", "crewe", "crews", "crias", "cribs", "crick", "cried", "crier", "cries", "crime", "crimp", "crims", "crine", "crios", "cripe", "crips", "crise", "crisp", "crith", "crits", "croak", "croci", "crock", "crocs", "croft", "crogs", "cromb", "crome", "crone", "cronk", "crons", "crony", "crook", "crool", "croon", "crops", "crore", "cross", "crost", "croup", "crout", "crowd", "crown", "crows", "croze", "cruck", "crude", "crudo", "cruds", "crudy", "cruel", "crues", "cruet", "cruft", "crumb", "crump", "crunk", "cruor", "crura", "cruse", "crush", "crust", "crusy", "cruve", "crwth", "cryer", "crypt", "ctene", "cubby", "cubeb", "cubed", "cuber", "cubes", "cubic", "cubit", "cuddy", "cuffo", "cuffs", "cuifs", "cuing", "cuish", "cuits", "cukes", "culch", "culet", "culex", "culls", "cully", "culms", "culpa", "culti", "cults", "culty", "cumec", "cumin", "cundy", "cunei", "cunit", "cunts", "cupel", "cupid", "cuppa", "cuppy", "curat", "curbs", "curch", "curds", "curdy", "cured", "curer", "cures", "curet", "curfs", "curia", "curie", "curio", "curli", "curls", "curly", "curns", "curny", "currs", "curry", "curse", "cursi", "curst", "curve", "curvy", "cusec", "cushy", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch", "cuter", "cutes", "cutey", "cutie", "cutin", "cutis", "cutto", "cutty", "cutup", "cuvee", "cuzes", "cwtch", "cyano", "cyans", "cyber", "cycad", "cycas", "cycle", "cyclo", "cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cynic", "cysts", "cytes", "cyton", "czars", "daals", "dabba", "daces", "dacha", "dacks", "dadah", "dadas", "daddy", "dados", "daffs", "daffy", "dagga", "daggy", "dagos", "dahls", "daiko", "daily", "daine", "daint", "dairy", "daisy", "daker", "daled", "dales", "dalis", "dalle", "dally", "dalts", "daman", "damar", "dames", "damme", "damns", "damps", "dampy", "dance", "dancy", "dandy", "dangs", "danio", "danks", "danny", "dants", "daraf", "darbs", "darcy", "dared", "darer", "dares", "darga", "dargs", "daric", "daris", "darks", "darky", "darns", "darre", "darts", "darzi", "dashi", "dashy", "datal", "dated", "dater", "dates", "datos", "datto", "datum", "daube", "daubs", "dauby", "dauds", "dault", "daunt", "daurs", "dauts", "daven", "davit", "dawah", "dawds", "dawed", "dawen", "dawks", "dawns", "dawts", "dayan", "daych", "daynt", "dazed", "dazer", "dazes", "deads", "deair", "deals", "dealt", "deans", "deare", "dearn", "dears", "deary", "deash", "death", "deave", "deaws", "deawy", "debag", "debar", "debby", "debel", "debes", "debit", "debts", "debud", "debug", "debur", "debus", "debut", "debye", "decad", "decaf", "decal", "decan", "decay", "decko", "decks", "decor", "decos", "decoy", "decry", "dedal", "deeds", "deedy", "deely", "deems", "deens", "deeps", "deere", "deers", "deets", "deeve", "deevs", "defat", "defer", "deffo", "defis", "defog", "degas", "degum", "degus", "deice", "deids", "deify", "deign", "deils", "deism", "deist", "deity", "deked", "dekes", "dekko", "delay", "deled", "deles", "delfs", "delft", "delis", "dells", "delly", "delos", "delph", "delta", "delts", "delve", "deman", "demes", "demic", "demit", "demob", "demoi", "demon", "demos", "dempt", "demur", "denar", "denay", "dench", "denes", "denet", "denim", "denis", "dense", "dents", "deoxy", "depot", "depth", "derat", "deray", "derby", "dered", "deres", "derig", "derma", "derms", "derns", "derny", "deros", "derro", "derry", "derth", "dervs", "desex", "deshi", "desis", "desks", "desse", "deter", "detox", "deuce", "devas", "devel", "devil", "devis", "devon", "devos", "devot", "dewan", "dewar", "dewax", "dewed", "dexes", "dexie", "dhaba", "dhaks", "dhals", "dhikr", "dhobi", "dhole", "dholl", "dhols", "dhoti", "dhows", "dhuti", "diact", "dials", "diane", "diary", "diazo", "dibbs", "diced", "dicer", "dices", "dicey", "dicht", "dicks", "dicky", "dicot", "dicta", "dicts", "dicty", "diddy", "didie", "didos", "didst", "diebs", "diels", "diene", "diets", "diffs", "dight", "digit", "dikas", "diked", "diker", "dikes", "dikey", "dildo", "dilli", "dills", "dilly", "dimbo", "dimer", "dimes", "dimly", "dimps", "dinar", "dined", "diner", "dines", "dinge", "dingo", "dings", "dingy", "dinic", "dinks", "dinky", "dinna", "dinos", "dints", "diode", "diols", "diota", "dippy", "dipso", "diram", "direr", "dirge", "dirke", "dirks", "dirls", "dirts", "dirty", "disas", "disci", "disco", "discs", "dishy", "disks", "disme", "dital", "ditas", "ditch", "dited", "dites", "ditsy", "ditto", "ditts", "ditty", "ditzy", "divan", "divas", "dived", "diver", "dives", "divis", "divna", "divos", "divot", "divvy", "diwan", "dixie", "dixit", "diyas", "dizen", "dizzy", "djinn", "djins", "doabs", "doats", "dobby", "dobes", "dobie", "dobla", "dobra", "dobro", "docht", "docks", "docos", "docus", "doddy", "dodge", "dodgy", "dodos", "doeks", "doers", "doest", "doeth", "doffs", "dogan", "doges", "dogey", "doggo", "doggy", "dogie", "dogma", "dohyo", "doilt", "doily", "doing", "doits", "dojos", "dolce", "dolci", "doled", "doles", "dolia", "dolls", "dolly", "dolma", "dolor", "dolos", "dolts", "domal", "domed", "domes", "domic", "donah", "donas", "donee", "doner", "donga", "dongs", "donko", "donna", "donne", "donny", "donor", "donsy", "donut", "doobs", "dooce", "doody", "dooks", "doole", "dools", "dooly", "dooms", "doomy", "doona", "doorn", "doors", "doozy", "dopas", "doped", "doper", "dopes", "dopey", "dorad", "dorba", "dorbs", "doree", "dores", "doric", "doris", "dorks", "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa", "dorse", "dorts", "dorty", "dosai", "dosas", "dosed", "doseh", "doser", "doses", "dosha", "dotal", "doted", "doter", "dotes", "dotty", "douar", "doubt", "douce", "doucs", "dough", "douks", "doula", "douma", "doums", "doups", "doura", "douse", "douts", "doved", "doven", "dover", "doves", "dovie", "dowar", "dowds", "dowdy", "dowed", "dowel", "dower", "dowie", "dowle", "dowls", "dowly", "downa", "downs", "downy", "dowps", "dowry", "dowse", "dowts", "doxed", "doxes", "doxie", "doyen", "doyly", "dozed", "dozen", "dozer", "dozes", "drabs", "drack", "draco", "draff", "draft", "drags", "drail", "drain", "drake", "drama", "drams", "drank", "drant", "drape", "draps", "drats", "drave", "drawl", "drawn", "draws", "drays", "dread", "dream", "drear", "dreck", "dreed", "dreer", "drees", "dregs", "dreks", "drent", "drere", "dress", "drest", "dreys", "dribs", "drice", "dried", "drier", "dries", "drift", "drill", "drily", "drink", "drips", "dript", "drive", "droid", "droil", "droit", "droke", "drole", "droll", "drome", "drone", "drony", "droob", "droog", "drook", "drool", "droop", "drops", "dropt", "dross", "drouk", "drove", "drown", "drows", "drubs", "drugs", "druid", "drums", "drunk", "drupe", "druse", "drusy", "druxy", "dryad", "dryas", "dryer", "dryly", "dsobo", "dsomo", "duads", "duals", "duans", "duars", "dubbo", "ducal", "ducat", "duces", "duchy", "ducks", "ducky", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett", "duffs", "dufus", "duing", "duits", "dukas", "duked", "dukes", "dukka", "dulce", "dules", "dulia", "dulls", "dully", "dulse", "dumas", "dumbo", "dumbs", "dumka", "dumky", "dummy", "dumps", "dumpy", "dunam", "dunce", "dunch", "dunes", "dungs", "dungy", "dunks", "dunno", "dunny", "dunsh", "dunts", "duomi", "duomo", "duped", "duper", "dupes", "duple", "duply", "duppy", "dural", "duras", "dured", "dures", "durgy", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry", "durst", "durum", "durzi", "dusks", "dusky", "dusts", "dusty", "dutch", "duvet", "duxes", "dwaal", "dwale", "dwalm", "dwams", "dwang", "dwarf", "dwaum", "dweeb", "dwell", "dwelt", "dwile", "dwine", "dyads", "dyers", "dying", "dyked", "dykes", "dykey", "dykon", "dynel", "dynes", "dzhos", "eager", "eagle", "eagre", "ealed", "eales", "eaned", "eards", "eared", "earls", "early", "earns", "earnt", "earst", "earth", "eased", "easel", "easer", "eases", "easle", "easts", "eaten", "eater", "eathe", "eaved", "eaves", "ebbed", "ebbet", "ebons", "ebony", "ebook", "ecads", "eched", "eches", "echos", "eclat", "ecrus", "edema", "edged", "edger", "edges", "edict", "edify", "edile", "edits", "educe", "educt", "eejit", "eensy", "eerie", "eeven", "eevns", "effed", "egads", "egers", "egest", "eggar", "egged", "egger", "egmas", "egret", "ehing", "eider", "eidos", "eight", "eigne", "eiked", "eikon", "eilds", "eisel", "eject", "ejido", "eking", "ekkas", "elain", "eland", "elans", "elate", "elbow", "elchi", "elder", "eldin", "elect", "elegy", "elemi", "elfed", "elfin", "eliad", "elide", "elint", "elite", "elmen", "eloge", "elogy", "eloin", "elope", "elops", "elpee", "elsin", "elude", "elute", "elvan", "elven", "elver", "elves", "emacs", "email", "embar", "embay", "embed", "ember", "embog", "embow", "embox", "embus", "emcee", "emeer", "emend", "emerg", "emery", "emeus", "emics", "emirs", "emits", "emmas", "emmer", "emmet", "emmew", "emmys", "emoji", "emong", "emote", "emove", "empts", "empty", "emule", "emure", "emyde", "emyds", "enact", "enarm", "enate", "ended", "ender", "endew", "endow", "endue", "enema", "enemy", "enews", "enfix", "eniac", "enjoy", "enlit", "enmew", "ennog", "ennui", "enoki", "enols", "enorm", "enows", "enrol", "ensew", "ensky", "ensue", "enter", "entia", "entry", "enure", "enurn", "envoi", "envoy", "enzym", "eorls", "eosin", "epact", "epees", "ephah", "ephas", "ephod", "ephor", "epics", "epoch", "epode", "epopt", "epoxy", "epris", "equal", "eques", "equid", "equip", "erase", "erbia", "erect", "erevs", "ergon", "ergos", "ergot", "erhus", "erica", "erick", "erics", "ering", "erned", "ernes", "erode", "erose", "erred", "error", "erses", "eruct", "erugo", "erupt", "eruvs", "erven", "ervil", "escar", "escot", "esile", "eskar", "esker", "esnes", "essay", "esses", "ester", "estoc", "estop", "estro", "etage", "etape", "etats", "etens", "ethal", "ether", "ethic", "ethne", "ethos", "ethyl", "etics", "etnas", "ettin", "ettle", "etude", "etuis", "etwee", "etyma", "eughs", "euked", "eupad", "euros", "eusol", "evade", "evens", "event", "evert", "every", "evets", "evhoe", "evict", "evils", "evite", "evohe", "evoke", "ewers", "ewest", "ewhow", "ewked", "exact", "exalt", "exams", "excel", "exeat", "execs", "exeem", "exeme", "exert", "exfil", "exies", "exile", "exine", "exing", "exist", "exits", "exode", "exome", "exons", "expat", "expel", "expos", "extol", "extra", "exude", "exuls", "exult", "exurb", "eyass", "eyers", "eying", "eyots", "eyras", "eyres", "eyrie", "eyrir", "ezine", "fabby", "fable", "faced", "facer", "faces", "facet", "facia", "facta", "facts", "faddy", "faded", "fader", "fades", "fadge", "fados", "faena", "faery", "faffs", "faffy", "faggy", "fagin", "fagot", "faiks", "fails", "faine", "fains", "faint", "fairs", "fairy", "faith", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj", "falls", "false", "famed", "fames", "fanal", "fancy", "fands", "fanes", "fanga", "fango", "fangs", "fanks", "fanny", "fanon", "fanos", "fanum", "faqir", "farad", "farce", "farci", "farcy", "fards", "fared", "farer", "fares", "farle", "farls", "farms", "faros", "farro", "farse", "farts", "fasci", "fasti", "fasts", "fatal", "fated", "fates", "fatly", "fatso", "fatty", "fatwa", "faugh", "fauld", "fault", "fauna", "fauns", "faurd", "fauts", "fauve", "favas", "favel", "faver", "faves", "favor", "favus", "fawns", "fawny", "faxed", "faxes", "fayed", "fayer", "fayne", "fayre", "fazed", "fazes", "feals", "feare", "fears", "feart", "fease", "feast", "feats", "feaze", "fecal", "feces", "fecht", "fecit", "fecks", "fedex", "feebs", "feeds", "feels", "feens", "feers", "feese", "feeze", "fehme", "feign", "feint", "feist", "felch", "felid", "fella", "fells", "felly", "felon", "felts", "felty", "femal", "femes", "femme", "femmy", "femur", "fence", "fends", "fendy", "fenis", "fenks", "fenny", "fents", "feods", "feoff", "feral", "ferer", "feres", "feria", "ferly", "fermi", "ferms", "ferns", "ferny", "ferry", "fesse", "festa", "fests", "festy", "fetal", "fetas", "fetch", "feted", "fetes", "fetid", "fetor", "fetta", "fetts", "fetus", "fetwa", "feuar", "feuds", "feued", "fever", "fewer", "feyed", "feyer", "feyly", "fezes", "fezzy", "fiars", "fiats", "fiber", "fibre", "fibro", "fices", "fiche", "fichu", "ficin", "ficos", "ficus", "fides", "fidge", "fidos", "fiefs", "field", "fiend", "fient", "fiere", "fiers", "fiery", "fiest", "fifed", "fifer", "fifes", "fifis", "fifth", "fifty", "figgy", "fight", "figos", "fiked", "fikes", "filar", "filch", "filed", "filer", "files", "filet", "filii", "filks", "fille", "fillo", "fills", "filly", "filmi", "films", "filmy", "filos", "filth", "filum", "final", "finca", "finch", "finds", "fined", "finer", "fines", "finis", "finks", "finny", "finos", "fiord", "fiqhs", "fique", "fired", "firer", "fires", "firie", "firks", "firms", "firns", "firry", "first", "firth", "fiscs", "fishy", "fisks", "fists", "fisty", "fitch", "fitly", "fitna", "fitte", "fitts", "fiver", "fives", "fixed", "fixer", "fixes", "fixit", "fizzy", "fjeld", "fjord", "flabs", "flack", "flaff", "flags", "flail", "flair", "flake", "flaks", "flaky", "flame", "flamm", "flams", "flamy", "flane", "flank", "flans", "flaps", "flare", "flary", "flash", "flask", "flats", "flava", "flawn", "flaws", "flawy", "flaxy", "flays", "fleam", "fleas", "fleck", "fleek", "fleer", "flees", "fleet", "flegs", "fleme", "flesh", "fleur", "flews", "flexi", "flexo", "fleys", "flick", "flics", "flied", "flier", "flies", "flimp", "flims", "fling", "flint", "flips", "flirs", "flirt", "flisk", "flite", "flits", "flitt", "float", "flobs", "flock", "flocs", "floes", "flogs", "flong", "flood", "floor", "flops", "flora", "flors", "flory", "flosh", "floss", "flota", "flote", "flour", "flout", "flown", "flows", "flubs", "flued", "flues", "fluey", "fluff", "fluid", "fluke", "fluky", "flume", "flump", "flung", "flunk", "fluor", "flurr", "flush", "flute", "fluty", "fluyt", "flyby", "flyer", "flype", "flyte", "foals", "foams", "foamy", "focal", "focus", "foehn", "fogey", "foggy", "fogie", "fogle", "fogou", "fohns", "foids", "foils", "foins", "foist", "folds", "foley", "folia", "folic", "folie", "folio", "folks", "folky", "folly", "fomes", "fonda", "fonds", "fondu", "fones", "fonly", "fonts", "foods", "foody", "fools", "foots", "footy", "foram", "foray", "forbs", "forby", "force", "fordo", "fords", "forel", "fores", "forex", "forge", "forgo", "forks", "forky", "forme", "forms", "forte", "forth", "forts", "forty", "forum", "forza", "forze", "foss ", "fossa", "fosse", "fouat", "fouds", "fouer", "fouet", "foule", "fouls", "found", "fount", "fours", "fouth", "fovea", "fowls", "fowth", "foxed", "foxes", "foxie", "foyer", "foyle", "foyne", "frabs", "frack", "fract", "frags", "frail", "fraim", "frame", "franc", "frank", "frape", "fraps", "frass", "frate", "frati", "frats", "fraud", "fraus", "frays", "freak", "free ", "freed", "freer", "frees", "freet", "freit", "fremd", "frena", "freon", "frere", "fresh", "frets", "friar", "fribs", "fried", "frier", "fries", "frigs", "frill", "frise", "frisk", "frist", "frith", "frits", "fritt", "fritz", "frize", "frizz", "frock", "froes", "frogs", "frond", "frons", "front", "frore", "frorn", "frory", "frosh", "frost", "froth", "frown", "frows", "frowy", "froze", "frugs", "fruit", "frump", "frush", "frust", "fryer", "fubar", "fubby", "fubsy", "fucks", "fucus", "fuddy", "fudge", "fudgy", "fuels", "fuero", "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugle", "fugly", "fugue", "fugus", "fujis", "fulls", "fully", "fumed", "fumer", "fumes", "fumet", "fundi", "funds", "fundy", "fungi", "fungo", "fungs", "funks", "funky", "funny", "fural", "furan", "furca", "furls", "furol", "furor", "furrs", "furry", "furth", "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil", "fusks", "fussy", "fusts", "fusty", "futon", "fuzed", "fuzee", "fuzes", "fuzil", "fuzzy", "fyces", "fyked", "fykes", "fyles", "fyrds", "fytte", "gabba", "gabby", "gable", "gaddi", "gades", "gadge", "gadid", "gadis", "gadje", "gadjo", "gadso", "gaffe", "gaffs", "gaged", "gager", "gages", "gaids", "gaily", "gains", "gairs", "gaita", "gaits", "gaitt", "gajos", "galah", "galas", "galax", "galea", "galed", "gales", "galls", "gally", "galop", "galut", "galvo", "gamas", "gamay", "gamba", "gambe", "gambo", "gambs", "gamed", "gamer", "games", "gamey", "gamic", "gamin", "gamma", "gamme", "gammy", "gamps", "gamut", "ganch", "gandy", "ganef", "ganev", "gangs", "ganja", "ganof", "gants", "gaols", "gaped", "gaper", "gapes", "gapos", "gappy", "garbe", "garbo", "garbs", "garda", "gares", "garis", "garms", "garni", "garre", "garth", "garum", "gases", "gasps", "gaspy", "gassy", "gasts", "gatch", "gated", "gater", "gates", "gaths", "gator", "gauch", "gaucy", "gauds", "gaudy", "gauge", "gauje", "gault", "gaums", "gaumy", "gaunt", "gaups", "gaurs", "gauss", "gauze", "gauzy", "gavel", "gavot", "gawcy", "gawds", "gawks", "gawky", "gawps", "gawsy", "gayal", "gayer", "gayly", "gazal", "gazar", "gazed", "gazer", "gazes", "gazon", "gazoo", "geals", "geans", "geare", "gears", "geats", "gebur", "gecko", "gecks", "geeks", "geeky", "geeps", "geese", "geest", "geist", "geits", "gelds", "gelee", "gelid", "gelly", "gelts", "gemel", "gemma", "gemmy", "gemot", "genal", "genas", "genes", "genet", "genic", "genie", "genii", "genip", "genny", "genoa", "genom", "genre", "genro", "gents", "genty", "genua", "genus", "geode", "geoid", "gerah", "gerbe", "geres", "gerle", "germs", "germy", "gerne", "gesse", "gesso", "geste", "gests", "getas", "getup", "geums", "geyan", "geyer", "ghast", "ghats", "ghaut", "ghazi", "ghees", "ghest", "ghost", "ghoul", "ghyll", "giant", "gibed", "gibel", "giber", "gibes", "gibli", "gibus", "giddy", "gifts", "gigas", "gighe", "gigot", "gigue", "gilas", "gilds", "gilet", "gills", "gilly", "gilpy", "gilts", "gimel", "gimme", "gimps", "gimpy", "ginch", "ginge", "gings", "ginks", "ginny", "ginzo", "gipon", "gippo", "gippy", "gipsy", "girds", "girls", "girly", "girns", "giron", "giros", "girrs", "girsh", "girth", "girts", "gismo", "gisms", "gists", "gitch", "gites", "giust", "gived", "given", "giver", "gives", "gizmo", "glace", "glade", "glads", "glady", "glaik", "glair", "glams", "gland", "glans", "glare", "glary", "glass", "glaum", "glaur", "glaze", "glazy", "gleam", "glean", "gleba", "glebe", "gleby", "glede", "gleds", "gleed", "gleek", "glees", "gleet", "gleis", "glens", "glent", "gleys", "glial", "glias", "glibs", "glide", "gliff", "glift", "glike", "glime", "glims", "glint", "glisk", "glits", "glitz", "gloam", "gloat", "globe", "globi", "globs", "globy", "glode", "glogg", "gloms", "gloom", "gloop", "glops", "glory", "gloss", "glost", "glout", "glove", "glows", "gloze", "glued", "gluer", "glues", "gluey", "glugs", "glume", "glums", "gluon", "glute", "gluts", "glyph", "gnarl", "gnarr", "gnars", "gnash", "gnats", "gnawn", "gnaws", "gnome", "gnows", "goads", "goafs", "goals", "goary", "goats", "goaty", "goban", "gobar", "gobbi", "gobbo", "gobby", "gobis", "gobos", "godet", "godly", "godso", "goels", "goers", "goest", "goeth", "goety", "gofer", "goffs", "gogga", "gogos", "goier", "going", "gojis", "golds", "goldy", "golem", "goles", "golfs", "golly", "golpe", "golps", "gombo", "gomer", "gompa", "gonad", "gonch", "gonef", "goner", "gongs", "gonia", "gonif", "gonks", "gonna", "gonof", "gonys", "gonzo", "gooby", "goods", "goody", "gooey", "goofs", "goofy", "googs", "gooks", "gooky", "goold", "gools", "gooly", "goons", "goony", "goops", "goopy", "goors", "goory", "goose", "goosy", "gopak", "gopik", "goral", "goras", "gored", "gores", "gorge", "goris", "gorms", "gormy", "gorps", "gorse", "gorsy", "gosht", "gosse", "gotch", "goths", "gothy", "gotta", "gouch", "gouge", "gouks", "goura", "gourd", "gouts", "gouty", "gowan", "gowds", "gowfs", "gowks", "gowls", "gowns", "goxes", "goyim", "goyle", "graal", "grabs", "grace", "grade", "grads", "graff", "graft", "grail", "grain", "graip", "grama", "grame", "gramp", "grams", "grana", "grand", "grans", "grant", "grape", "graph", "grapy", "grasp", "grass", "grate", "grave", "gravs", "gravy", "grays", "graze", "great", "grebe", "grebo", "grece", "greed", "greek", "green", "grees", "greet", "grege", "grego", "grein", "grens", "grese", "greve", "grews", "greys", "grice", "gride", "grids", "grief", "griff", "grift", "grigs", "grike", "grill", "grime", "grimy", "grind", "grins", "griot", "gripe", "grips", "gript", "gripy", "grise", "grist", "grisy", "grith", "grits", "grize", "groan", "groat", "grody", "grogs", "groin", "groks", "groma", "grone", "groof", "groom", "grope", "gross", "grosz", "grots", "grouf", "group", "grout", "grove", "grovy", "growl", "grown", "grows", "grrls", "grrrl", "grubs", "grued", "gruel", "grues", "grufe", "gruff", "grume", "grump", "grund", "grunt", "gryce", "gryde", "gryke", "grype", "grypt", "guaco", "guana", "guano", "guans", "guard", "guars", "guava", "gucks", "gucky", "gudes", "guess", "guest", "guffs", "gugas", "guide", "guids", "guild", "guile", "guilt", "guimp", "guiro", "guise", "gulag", "gular", "gulas", "gulch", "gules", "gulet", "gulfs", "gulfy", "gulls", "gully", "gulph", "gulps", "gulpy", "gumbo", "gumma", "gummi", "gummy", "gumps", "gundy", "gunge", "gungy", "gunks", "gunky", "gunny", "guppy", "guqin", "gurdy", "gurge", "gurls", "gurly", "gurns", "gurry", "gursh", "gurus", "gushy", "gusla", "gusle", "gusli", "gussy", "gusto", "gusts", "gusty", "gutsy", "gutta", "gutty", "guyed", "guyle", "guyot", "guyse", "gwine", "gyals", "gyans", "gybed", "gybes", "gyeld", "gymps", "gynae", "gynie", "gynny", "gynos", "gyoza", "gypos", "gyppo", "gyppy", "gypsy", "gyral", "gyred", "gyres", "gyron", "gyros", "gyrus", "gytes", "gyved", "gyves", "haafs", "haars", "habit", "hable", "habus", "hacek", "hacks", "hadal", "haded", "hades", "hadji", "hadst", "haems", "haets", "haffs", "hafiz", "hafts", "haggs", "hahas", "haick", "haika", "haiks", "haiku", "hails", "haily", "hains", "haint", "hairs", "hairy", "haith", "hajes", "hajis", "hajji", "hakam", "hakas", "hakea", "hakes", "hakim", "hakus", "halal", "haled", "haler", "hales", "halfa", "halfs", "halid", "hallo", "halls", "halma", "halms", "halon", "halos", "halse", "halts", "halva", "halve", "halwa", "hamal", "hamba", "hamed", "hames", "hammy", "hamza", "hanap", "hance", "hanch", "hands", "handy", "hangi", "hangs", "hanks", "hanky", "hansa", "hanse", "hants", "haole", "haoma", "hapax", "haply", "happi", "happy", "hapus", "haram", "hards", "hardy", "hared", "harem", "hares", "harim", "harks", "harls", "harms", "harns", "haros", "harps", "harpy", "harry", "harsh", "harts", "hashy", "hasks", "hasps", "hasta", "haste", "hasty", "hatch", "hated", "hater", "hates", "hatha", "hauds", "haufs", "haugh", "hauld", "haulm", "hauls", "hault", "hauns", "haunt", "hause", "haute", "haven", "haver", "haves", "havoc", "hawed", "hawks", "hawms", "hawse", "hayed", "hayer", "hayey", "hayle", "hazan", "hazed", "hazel", "hazer", "hazes", "head ", "heads", "heady", "heald", "heals", "heame", "heaps", "heapy", "heard", "heare", "hears", "heart", "heast", "heath", "heats", "heave", "heavy", "heben", "hebes", "hecht", "hecks", "heder", "hedge", "hedgy", "heeds", "heedy", "heels", "heeze", "hefte", "hefts", "hefty", "heids", "heigh", "heils", "heirs", "heist", "hejab", "hejra", "heled", "heles", "helio", "helix", "hello", "hells", "helms", "helos", "helot", "helps", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hence", "hench", "hends", "henge", "henna", "henny", "henry", "hents", "hepar", "herbs", "herby", "herds", "heres", "herls", "herma", "herms", "herns", "heron", "heros", "herry", "herse", "hertz", "herye", "hesps", "hests", "hetes", "heths", "heuch", "heugh", "hevea", "hewed", "hewer", "hewgh", "hexad", "hexed", "hexer", "hexes", "hexyl", "heyed", "hiant", "hicks", "hided", "hider", "hides", "hiems", "highs", "hight", "hijab", "hijra", "hiked", "hiker", "hikes", "hikoi", "hilar", "hilch", "hillo", "hills", "hilly", "hilts", "hilum", "hilus", "himbo", "hinau", "hinds", "hinge", "hings", "hinky", "hinny", "hints", "hiois", "hiply", "hippo", "hippy", "hired", "hiree", "hirer", "hires", "hissy", "hists", "hitch", "hithe", "hived", "hiver", "hives", "hizen", "hoaed", "hoagy", "hoard", "hoars", "hoary", "hoast", "hobby", "hobos", "hocks", "hocus", "hodad", "hodja", "hoers", "hogan", "hogen", "hoggs", "hoghs", "hohed", "hoick", "hoied", "hoiks", "hoing", "hoise", "hoist", "hokas", "hoked", "hokes", "hokey", "hokis", "hokku", "hokum", "holds", "holed", "holes", "holey", "holks", "holla", "hollo", "holly", "holme", "holms", "holon", "holos", "holts", "homas", "homed", "homer", "homes", "homey", "homie", "homme", "homos", "honan", "honda", "honds", "honed", "honer", "hones", "honey", "hongi", "hongs", "honks", "honky", "honor", "hooch", "hoods", "hoody", "hooey", "hoofs", "hooka", "hooks", "hooky", "hooly", "hoons", "hoops", "hoord", "hoors", "hoosh", "hoots", "hooty", "hoove", "hopak", "hoped", "hoper", "hopes", "hoppy", "horah", "horal", "horas", "horde", "horis", "horks", "horme", "horns", "horny", "horse", "horst", "horsy", "hosed", "hosel", "hosen", "hoser", "hoses", "hosey", "hosta", "hosts", "hotch", "hotel", "hoten", "hotly", "hotty", "houff", "houfs", "hough", "hound", "houri", "hours", "house", "houts", "hovea", "hoved", "hovel", "hoven", "hover", "hoves", "howbe", "howdy", "howes", "howff", "howfs", "howks", "howls", "howre", "howso", "hoxed", "hoxes", "hoyas", "hoyed", "hoyle", "hubby", "hucks", "hudna", "hudud", "huers", "huffs", "huffy", "huger", "huggy", "huhus", "huias", "hulas", "hules", "hulks", "hulky", "hullo", "hulls", "hully", "human", "humas", "humfs", "humic", "humid", "humor", "humph", "humps", "humpy", "humus", "hunch", "hunks", "hunky", "hunts", "hurds", "hurls", "hurly", "hurra", "hurry", "hurst", "hurts", "hushy", "husks", "husky", "husos", "hussy", "hutch", "hutia", "huzza", "huzzy", "hwyls", "hydra", "hydro", "hyena", "hyens", "hygge", "hying", "hykes", "hylas", "hyleg", "hyles", "hylic", "hymen", "hymns", "hynde", "hyoid", "hyped", "hyper", "hypes", "hypha", "hyphy", "hypos", "hyrax", "hyson", "hythe", "iambi", "iambs", "ibrik", "icers", "iched", "iches", "ichor", "icier", "icily", "icing", "icker", "ickle", "icons", "ictal", "ictic", "ictus", "idant", "ideal", "ideas", "idees", "ident", "idiom", "idiot", "idled", "idler", "idles", "idola", "idols", "idyll", "idyls", "iftar", "igapo", "igged", "igloo", "iglus", "ihram", "ikans", "ikats", "ikons", "ileac", "ileal", "ileum", "ileus", "iliac", "iliad", "ilial", "ilium", "iller", "illth", "image", "imago", "imams", "imari", "imaum", "imbar", "imbed", "imbue", "imide", "imido", "imids", "imine", "imino", "immew", "immit", "immix", "imped", "impel", "impis", "imply", "impot", "impro", "imshi", "imshy", "inane", "inapt", "inarm", "inbox", "inbye", "incel", "incle", "incog", "incur", "incus", "incut", "indew", "index", "india", "indie", "indol", "indow", "indri", "indue", "inept", "inerm", "inert", "infer", "infix", "infos", "infra", "ingan", "ingle", "ingot", "inion", "inked", "inker", "inkle", "inlay", "inlet", "inned", "inner", "innit", "inorb", "input", "inrun", "inset", "inspo", "intel", "inter", "intil", "intis", "intra", "intro", "inula", "inure", "inurn", "inust", "invar", "inwit", "iodic", "iodid", "iodin", "ionic", "iotas", "ippon", "irade", "irate", "irids", "iring", "irked", "iroko", "irone", "irons", "irony", "isbas", "ishes", "isled", "isles", "islet", "isnae", "issei", "issue", "istle", "itchy", "items", "ither", "ivied", "ivies", "ivory", "ixias", "ixnay", "ixora", "ixtle", "izard", "izars", "izzat", "jaaps", "jabot", "jacal", "jacks", "jacky", "jaded", "jades", "jafas", "jaffa", "jagas", "jager", "jaggs", "jaggy", "jagir", "jagra", "jails", "jaker", "jakes", "jakey", "jalap", "jalop", "jambe", "jambo", "jambs", "jambu", "james", "jammy", "jamon", "janes", "janns", "janny", "janty", "japan", "japed", "japer", "japes", "jarks", "jarls", "jarps", "jarta", "jarul", "jasey", "jaspe", "jasps", "jatos", "jauks", "jaunt", "jaups", "javas", "javel", "jawan", "jawed", "jaxie", "jazzy", "jeans", "jeats", "jebel", "jedis", "jeels", "jeely", "jeeps", "jeers", "jeeze", "jefes", "jeffs", "jehad", "jehus", "jelab", "jello", "jells", "jelly", "jembe", "jemmy", "jenny", "jeons", "jerid", "jerks", "jerky", "jerry", "jesse", "jests", "jesus", "jetes", "jeton", "jetty", "jeune", "jewed", "jewel", "jewie", "jhala", "jiaos", "jibba", "jibbs", "jibed", "jiber", "jibes", "jiffs", "jiffy", "jiggy", "jigot", "jihad", "jills", "jilts", "jimmy", "jimpy", "jingo", "jinks", "jinne", "jinni", "jinns", "jirds", "jirga", "jirre", "jisms", "jived", "jiver", "jives", "jivey", "jnana", "jobed", "jobes", "jocko", "jocks", "jocky", "jocos", "jodel", "joeys", "johns", "joins", "joint", "joist", "joked", "joker", "jokes", "jokey", "jokol", "joled", "joles", "jolls", "jolly", "jolts", "jolty", "jomon", "jomos", "jones", "jongs", "jonty", "jooks", "joram", "jorum", "jotas", "jotty", "jotun", "joual", "jougs", "jouks", "joule", "jours", "joust", "jowar", "jowed", "jowls", "jowly", "joyed", "jubas", "jubes", "jucos", "judas", "judge", "judgy", "judos", "jugal", "jugum", "juice", "juicy", "jujus", "juked", "jukes", "jukus", "julep", "jumar", "jumbo", "jumby", "jumps", "jumpy", "junco", "junks", "junky", "junta", "junto", "jupes", "jupon", "jural", "jurat", "jurel", "jures", "juror", "justs", "jutes", "jutty", "juves", "juvie", "kaama", "kabab", "kabar", "kabob", "kacha", "kacks", "kadai", "kades", "kadis", "kafir", "kagos", "kagus", "kahal", "kaiak", "kaids", "kaies", "kaifs", "kaika", "kaiks", "kails", "kaims", "kaing", "kains", "kakas", "kakis", "kalam", "kales", "kalif", "kalis", "kalpa", "kamas", "kames", "kamik", "kamis", "kamme", "kanae", "kanas", "kandy", "kaneh", "kanes", "kanga", "kangs", "kanji", "kants", "kanzu", "kaons", "kapas", "kaphs", "kapok", "kapow", "kappa", "kapus", "kaput", "karas", "karat", "karks", "karma", "karns", "karoo", "karos", "karri", "karst", "karsy", "karts", "karzy", "kasha", "kasme", "katal", "katas", "katis", "katti", "kaugh", "kauri", "kauru", "kaury", "kaval", "kavas", "kawas", "kawau", "kawed", "kayak", "kayle", "kayos", "kazis", "kazoo", "kbars", "kebab", "kebar", "kebob", "kecks", "kedge", "kedgy", "keech", "keefs", "keeks", "keels", "keema", "keeno", "keens", "keeps", "keets", "keeve", "kefir", "kehua", "keirs", "kelep", "kelim", "kells", "kelly", "kelps", "kelpy", "kelts", "kelty", "kembo", "kembs", "kemps", "kempt", "kempy", "kenaf", "kench", "kendo", "kenos", "kente", "kents", "kepis", "kerbs", "kerel", "kerfs", "kerky", "kerma", "kerne", "kerns", "keros", "kerry", "kerve", "kesar", "kests", "ketas", "ketch", "ketes", "ketol", "kevel", "kevil", "kevin", "kexes", "keyed", "keyer", "khadi", "khafs", "khaki", "khans", "khaph", "khats", "khaya", "khazi", "kheda", "kheth", "khets", "khoja", "khors", "khoum", "khuds", "kiaat", "kiack", "kiang", "kibbe", "kibbi", "kibei", "kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kidel", "kidge", "kiefs", "kiers", "kieve", "kievs", "kight", "kikes", "kikoi", "kiley", "kilim", "kills", "kilns", "kilos", "kilps", "kilts", "kilty", "kimbo", "kinas", "kinda", "kinds", "kindy", "kines", "kings", "kinin", "kinks", "kinky", "kinos", "kiore", "kiosk", "kipes", "kippa", "kipps", "kirby", "kirks", "kirns", "kirri", "kisan", "kissy", "kists", "kited", "kiter", "kites", "kithe", "kiths", "kitty", "kitul", "kivas", "kiwis", "klang", "klaps", "klett", "klick", "klieg", "kliks", "klong", "kloof", "kluge", "klutz", "knack", "knags", "knaps", "knarl", "knars", "knaur", "knave", "knawe", "knead", "kneed", "kneel", "knees", "knell", "knelt", "knife", "knish", "knits", "knive", "knobs", "knock", "knoll", "knops", "knosp", "knots", "knout", "knowe", "known", "knows", "knubs", "knurl", "knurr", "knurs", "knuts", "koala", "koans", "koaps", "koban", "kobos", "koels", "koffs", "kofta", "kogal", "kohas", "kohen", "kohls", "koine", "kojis", "kokam", "kokas", "koker", "kokra", "kokum", "kolas", "kolos", "kombu", "konbu", "kondo", "konks", "kooks", "kooky", "koori", "kopek", "kophs", "kopje", "koppa", "korai", "koras", "korat", "kores", "korma", "koros", "korun", "korus", "koses", "kotch", "kotos", "kotow", "koura", "kraal", "krabs", "kraft", "krais", "krait", "krang", "krans", "kranz", "kraut", "krays", "kreep", "kreng", "krewe", "krill", "krona", "krone", "kroon", "krubi", "krunk", "ksars", "kubie", "kudos", "kudus", "kudzu", "kufis", "kugel", "kuias", "kukri", "kukus", "kulak", "kulan", "kulas", "kulfi", "kumis", "kumys", "kuris", "kurre", "kurta", "kurus", "kusso", "kutas", "kutch", "kutis", "kutus", "kuzus", "kvass", "kvell", "kwela", "kyack", "kyaks", "kyang", "kyars", "kyats", "kybos", "kydst", "kyles", "kylie", "kylin", "kylix", "kyloe", "kynde", "kynds", "kypes", "kyrie", "kytes", "kythe", "laari", "labda", "label", "labia", "labis", "labor", "labra", "laced", "lacer", "laces", "lacet", "lacey", "lacks", "laddy", "laded", "laden", "lader", "lades", "ladle", "laers", "laevo", "lagan", "lager", "lahal", "lahar", "laich", "laics", "laids", "laigh", "laika", "laiks", "laird", "lairs", "lairy", "laith", "laity", "laked", "laker", "lakes", "lakhs", "lakin", "laksa", "laldy", "lalls", "lamas", "lambs", "lamby", "lamed", "lamer", "lames", "lamia", "lammy", "lamp ", "lamps", "lanai", "lanas", "lance", "lanch", "lande", "lands", "lanes", "lanks", "lanky", "lants", "lapel", "lapin", "lapis", "lapje", "lapse", "larch", "lards", "lardy", "laree", "lares", "large", "largo", "laris", "larks", "larky", "larns", "larnt", "larum", "larva", "lased", "laser", "lases", "lassi", "lasso", "lassu", "lassy", "lasts", "latah", "latch", "lated", "laten", "later", "latex", "lathe", "lathi", "laths", "lathy", "latke", "latte", "latus", "lauan", "lauch", "lauds", "laufs", "laugh", "laund", "laura", "laval", "lavas", "laved", "laver", "laves", "lavra", "lavvy", "lawed", "lawer", "lawin", "lawks", "lawns", "lawny", "laxed", "laxer", "laxes", "laxly", "layed", "layer", "layin", "layup", "lazar", "lazed", "lazes", "lazos", "lazzi", "lazzo", "leach", "leads", "leady", "leafs", "leafy", "leaks", "leaky", "leams", "leans", "leant", "leany", "leaps", "leapt", "leare", "learn", "lears", "leary", "lease", "leash", "least", "leats", "leave", "leavy", "leaze", "leben", "leccy", "ledes", "ledge", "ledgy", "ledum", "leear", "leech", "leeks", "leeps", "leers", "leery", "leese", "leets", "leeze", "lefte", "lefts", "lefty", "legal", "leger", "leges", "legge", "leggo", "leggy", "legit", "lehrs", "lehua", "leirs", "leish", "leman", "lemed", "lemel", "lemes", "lemma", "lemme", "lemon", "lemur", "lends", "lenes", "lengs", "lenis", "lenos", "lense", "lenti", "lento", "leone", "leper", "lepid", "lepra", "lepta", "lered", "leres", "lerps", "lesbo", "leses", "lests", "letch", "lethe", "letup", "leuch", "leuco", "leuds", "leugh", "levas", "levee", "level", "lever", "leves", "levin", "levis", "lewis", "lexes", "lexis", "lezes", "lezza", "lezzy", "liana", "liane", "liang", "liard", "liars", "liart", "libel", "liber", "libra", "libri", "lichi", "licht", "licit", "licks", "lidar", "lidos", "liefs", "liege", "liens", "liers", "lieus", "lieve", "lifer", "lifes", "lifts", "ligan", "liger", "ligge", "light", "ligne", "liked", "liken", "liker", "likes", "likin", "lilac", "lills", "lilos", "lilts", "liman", "limas", "limax", "limba", "limbi", "limbo", "limbs", "limby", "limed", "limen", "limes", "limey", "limit", "limma", "limns", "limos", "limpa", "limps", "linac", "linch", "linds", "lindy", "lined", "linen", "liner", "lines", "liney", "linga", "lingo", "lings", "lingy", "linin", "links", "linky", "linns", "linny", "linos", "lints", "linty", "linum", "linux", "lions", "lipas", "lipes", "lipid", "lipin", "lipos", "lippy", "liras", "lirks", "lirot", "lisks", "lisle", "lisps", "lists", "litai", "litas", "lited", "liter", "lites", "lithe", "litho", "liths", "litre", "lived", "liven", "liver", "lives", "livid", "livor", "livre", "llama", "llano", "loach", "loads", "loafs", "loams", "loamy", "loans", "loast", "loath", "loave", "lobar", "lobby", "lobed", "lobes", "lobos", "lobus", "local", "loche", "lochs", "locie", "locis", "locks", "locos", "locum", "locus", "loden", "lodes", "lodge", "loess", "lofts", "lofty", "logan", "loges", "loggy", "logia", "logic", "logie", "login", "logoi", "logon", "logos", "lohan", "loids", "loins", "loipe", "loirs", "lokes", "lolls", "lolly", "lolog", "lomas", "lomed", "lomes", "loner", "longa", "longe", "longs", "looby", "looed", "looey", "loofa", "loofs", "looie", "looks", "looky", "looms", "loons", "loony", "loops", "loopy", "loord", "loose", "loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lords", "lordy", "lorel", "lores", "loric", "loris", "lorry", "losed", "losel", "losen", "loser", "loses", "lossy", "lotah", "lotas", "lotes", "lotic", "lotos", "lotsa", "lotta", "lotte", "lotto", "lotus", "loued", "lough", "louie", "louis", "louma", "lound", "louns", "loupe", "loups", "loure", "lours", "loury", "louse", "lousy", "louts", "lovat", "loved", "lover", "loves", "lovey", "lovie", "lowan", "lowed", "lower", "lowes", "lowly", "lownd", "lowne", "lowns", "lowps", "lowry", "lowse", "lowts", "loxed", "loxes", "loyal", "lozen", "luach", "luaus", "lubed", "lubes", "lubra", "luces", "lucid", "lucks", "lucky", "lucre", "ludes", "ludic", "ludos", "luffa", "luffs", "luged", "luger", "luges", "lulls", "lulus", "lumas", "lumbi", "lumen", "lumme", "lummy", "lumps", "lumpy", "lunar", "lunas", "lunch", "lunes", "lunet", "lunge", "lungi", "lungs", "lunks", "lunts", "lupin", "lupus", "lurch", "lured", "lurer", "lures", "lurex", "lurgi", "lurgy", "lurid", "lurks", "lurry", "lurve", "luser", "lushy", "lusks", "lusts", "lusty", "lusus", "lutea", "luted", "luter", "lutes", "luvvy", "luxed", "luxer", "luxes", "lweis", "lyams", "lyard", "lyart", "lyase", "lycea", "lycee", "lycra", "lying", "lymes", "lymph", "lynch", "lynes", "lyres", "lyric", "lysed", "lyses", "lysin", "lysis", "lysol", "lyssa", "lyted", "lytes", "lythe", "lytic", "lytta", "maaed", "maare", "maars", "mabes", "macas", "macaw", "maced", "macer", "maces", "mache", "machi", "macho", "machs", "macks", "macle", "macon", "macro", "madam", "made ", "madge", "madid", "madly", "madre", "maerl", "mafia", "mafic", "mages", "maggs", "magic", "magma", "magot", "magus", "mahoe", "mahua", "mahwa", "maids", "maiko", "maiks", "maile", "maill", "mails", "maims", "mains", "maire", "mairs", "maise", "maist", "maize", "major", "makar", "maker", "makes", "makis", "makos", "malam", "malar", "malas", "malax", "males", "malic", "malik", "malis", "malls", "malms", "malmy", "malts", "malty", "malus", "malva", "malwa", "mamas", "mamba", "mambo", "mamee", "mamey", "mamie", "mamma", "mammy", "manas", "manat", "mandi", "maneb", "maned", "maneh", "manes", "manet", "manga", "mange", "mango", "mangs", "mangy", "mania", "manic", "manis", "manky", "manly", "manna", "manor", "manos", "manse", "manta", "manto", "manty", "manul", "manus", "mapau", "maple", "maqui", "marae", "marah", "maras", "march", "marcs", "mardy", "mares", "marge", "margs", "maria", "marid", "marka", "marks", "marle", "marls", "marly", "marms", "maron", "maror", "marra", "marri", "marry", "marse", "marsh", "marts", "marvy", "masas", "mased", "maser", "mases", "mashy", "masks", "mason", "massa", "masse", "massy", "masts", "masty", "masus", "matai", "match", "mated", "mater", "mates", "matey", "maths", "matin", "matlo", "matte", "matts", "matza", "matzo", "mauby", "mauds", "mauls", "maund", "mauri", "mausy", "mauts", "mauve", "mauzy", "maven", "mavie", "mavin", "mavis", "mawed", "mawks", "mawky", "mawns", "mawrs", "maxed", "maxes", "maxim", "maxis", "mayan", "mayas", "maybe", "mayed", "mayor", "mayos", "mayst", "mazed", "mazer", "mazes", "mazey", "mazut", "mbira", "meads", "meals", "mealy", "meane", "means", "meant", "meany", "meare", "mease", "meath", "meats", "meaty", "mebos", "mecca", "mechs", "mecks", "medal", "media", "medic", "medii", "medle", "meeds", "meers", "meets", "meffs", "meins", "meint", "meiny", "meith", "mekka", "melas", "melba", "melds", "melee", "melic", "melik", "mells", "melon", "melts", "melty", "memes", "memos", "menad", "mends", "mened", "menes", "menge", "mengs", "mensa", "mense", "mensh", "menta", "mento", "menus", "meous", "meows", "merch", "mercs", "mercy", "merde", "mered", "merel", "merer", "meres", "merge", "meril", "meris", "merit", "merks", "merle", "merls", "merry", "merse", "mesal", "mesas", "mesel", "meses", "meshy", "mesic", "mesne", "meson", "messy", "mesto", "metal", "meted", "meter", "metes", "metho", "meths", "metic", "metif", "metis", "metol", "metre", "metro", "meuse", "meved", "meves", "mewed", "mewls", "meynt", "mezes", "mezze", "mezzo", "mhorr", "miaou", "miaow", "miasm", "miaul", "micas", "miche", "micht", "micks", "micky", "micos", "micra", "micro", "middy", "midge", "midgy", "midis", "midst", "miens", "mieve", "miffs", "miffy", "mifty", "miggs", "might", "mihas", "mihis", "miked", "mikes", "mikra", "mikva", "milch", "milds", "miler", "miles", "milfs", "milia", "milko", "milks", "milky", "mille", "mills", "milor", "milos", "milpa", "milts", "milty", "miltz", "mimed", "mimeo", "mimer", "mimes", "mimic", "mimsy", "minae", "minar", "minas", "mince", "mincy", "minds", "mined", "miner", "mines", "minge", "mings", "mingy", "minim", "minis", "minke", "minks", "minny", "minor", "minos", "mints", "minty", "minus", "mired", "mires", "mirex", "mirid", "mirin", "mirks", "mirky", "mirly", "miros", "mirth", "mirvs", "mirza", "misch", "misdo", "miser", "mises", "misgo", "misos", "missa", "missy", "mists", "misty", "mitch", "miter", "mites", "mitis", "mitre", "mitts", "mixed", "mixen", "mixer", "mixes", "mixte", "mixup", "mizen", "mizzy", "mneme", "moans", "moats", "mobby", "mobes", "mobey", "mobie", "moble", "mocha", "mochi", "mochs", "mochy", "mocks", "modal", "model", "modem", "moder", "modes", "modge", "modii", "modus", "moers", "mofos", "moggy", "mogul", "mohel", "mohos", "mohrs", "mohua", "mohur", "moile", "moils", "moira", "moire", "moist", "moits", "mojos", "mokes", "mokis", "mokos", "molal", "molar", "molas", "molds", "moldy", "moled", "moles", "molla", "molls", "molly", "molto", "molts", "molys", "momes", "momma", "mommy", "momus", "monad", "monal", "monas", "monde", "mondo", "moner", "money", "mongo", "mongs", "monic", "monie", "monks", "monos", "monte", "month", "monty", "moobs", "mooch", "moods", "moody", "mooed", "mooks", "moola", "mooli", "mools", "mooly", "moong", "moons", "moony", "moops", "moors", "moory", "moose", "moots", "moove", "moped", "moper", "mopes", "mopey", "moppy", "mopsy", "mopus", "morae", "moral", "moras", "morat", "moray", "morel", "mores", "moria", "morne", "morns", "moron", "morph", "morra", "morro", "morse", "morts", "mosed", "moses", "mosey", "mosks", "mosso", "mossy", "moste", "mosts", "moted", "motel", "moten", "motes", "motet", "motey", "moths", "mothy", "motif", "motis", "motor", "motte", "motto", "motts", "motty", "motus", "motza", "mouch", "moues", "mould", "mouls", "moult", "mound", "mount", "moups", "mourn", "mouse", "moust", "mousy", "mouth", "moved", "mover", "moves", "movie", "mowas", "mowed", "mower", "mowra", "moxas", "moxie", "moyas", "moyle", "moyls", "mozed", "mozes", "mozos", "mpret", "mucho", "mucic", "mucid", "mucin", "mucks", "mucky", "mucor", "mucro", "mucus", "muddy", "mudge", "mudir", "mudra", "muffs", "mufti", "mugga", "muggs", "muggy", "muhly", "muids", "muils", "muirs", "muist", "mujik", "mulch", "mulct", "muled", "mules", "muley", "mulga", "mulie", "mulla", "mulls", "mulse", "mulsh", "mumms", "mummy", "mumps", "mumsy", "mumus", "munch", "munga", "munge", "mungo", "mungs", "munis", "munts", "muntu", "muons", "mural", "muras", "mured", "mures", "murex", "murid", "murks", "murky", "murls", "murly", "murra", "murre", "murri", "murrs", "murry", "murti", "murva", "musar", "musca", "mused", "muser", "muses", "muset", "musha", "mushy", "music", "musit", "musks", "musky", "musos", "musse", "mussy", "musth", "musts", "musty", "mutch", "muted", "muter", "mutes", "mutha", "mutis", "muton", "mutts", "muxed", "muxes", "muzak", "muzzy", "mvule", "myall", "mylar", "mynah", "mynas", "myoid", "myoma", "myope", "myops", "myopy", "myrrh", "mysid", "mythi", "myths", "mythy", "myxos", "mzees", "naams", "naans", "nabes", "nabis", "nabks", "nabla", "nabob", "nache", "nacho", "nacre", "nadas", "nadir", "naeve", "naevi", "naffs", "nagas", "naggy", "nagor", "nahal", "naiad", "naifs", "naiks", "nails", "naira", "nairu", "naive", "naked", "naker", "nakfa", "nalas", "naled", "nalla", "named", "namer", "names", "namma", "namus", "nanas", "nance", "nancy", "nandu", "nanna", "nanny", "nano ", "nanos", "nanua", "napas", "naped", "napes", "napoo", "nappa", "nappe", "nappy", "naras", "narco", "narcs", "nards", "nares", "naric", "naris", "narks", "narky", "narre", "nas  ", "nasal", "nashi", "nasty", "natal", "natch", "nates", "natis", "natty", "nauch", "naunt", "naval", "navar", "navel", "naves", "navew", "navvy", "nawab", "nazes", "nazir", "nazis", "nduja", "neafe", "neals", "neaps", "nears", "neath", "neats", "nebek", "nebel", "necks", "neddy", "needs", "needy", "neeld", "neele", "neemb", "neems", "neeps", "neese", "neeze", "negro", "negus", "neifs", "neigh", "neist", "neive", "nelis", "nelly", "nemas", "nemns", "nempt", "nenes", "neons", "neper", "nepit", "neral", "nerds", "nerdy", "nerka", "nerks", "nerol", "nerts", "nertz", "nerve", "nervy", "nests", "netes", "netop", "netts", "netty", "neuks", "neume", "neums", "nevel", "never", "neves", "nevus", "newbs", "newed", "newel", "newer", "newie", "newly", "newsy", "newts", "nexts", "nexus", "ngaio", "ngana", "ngati", "ngoma", "ngwee", "nicad", "nicer", "niche", "nicht", "nicks", "nicol", "nidal", "nided", "nides", "nidor", "nidus", "niece", "niefs", "nieve", "nifes", "niffs", "niffy", "nifty", "niger", "nighs", "night", "nihil", "nikab", "nikah", "nikau", "nills", "nimbi", "nimbs", "nimps", "niner", "nines", "ninja", "ninny", "ninon", "ninth", "nipas", "nippy", "niqab", "nirls", "nirly", "nisei", "nisse", "nisus", "niter", "nites", "nitid", "niton", "nitre", "nitro", "nitry", "nitty", "nival", "nixed", "nixer", "nixes", "nixie", "nizam", "nkosi", "noahs", "nobby", "noble", "nobly", "nocks", "nodal", "noddy", "nodes", "nodus", "noels", "noggs", "nohow", "noils", "noily", "noint", "noirs", "noise", "noisy", "noles", "nolls", "nolos", "nomad", "nomas", "nomen", "nomes", "nomic", "nomoi", "nomos", "nonas", "nonce", "nones", "nonet", "nongs", "nonis", "nonny", "nonyl", "noobs", "nooit", "nooks", "nooky", "noons", "noops", "noose", "nopal", "noria", "noris", "norks", "norm ", "norma", "norms", "north", "nosed", "noser", "noses", "nosey", "notal", "notch", "noted", "noter", "notes", "notum", "nould", "noule", "nouls", "nouns", "nouny", "noups", "novae", "novas", "novel", "novum", "noway", "nowed", "nowls", "nowts", "nowty", "noxal", "noxes", "noyau", "noyed", "noyes", "nubby", "nubia", "nucha", "nuddy", "nuder", "nudes", "nudge", "nudie", "nudzh", "nuffs", "nugae", "nuked", "nukes", "nulla", "nulls", "numbs", "numen", "nummy", "nunny", "nurds", "nurdy", "nurls", "nurrs", "nurse", "nutso", "nutsy", "nutty", "nyaff", "nyala", "nying", "nylon", "nymph", "nyssa", "oaked", "oaken", "oaker", "oakum", "oared", "oases", "oasis", "oasts", "oaten", "oater", "oaths", "oaves", "obang", "obeah", "obeli", "obese", "obeys", "obias", "obied", "obiit", "obits", "objet", "oboes", "obole", "oboli", "obols", "occam", "occur", "ocean", "ocher", "oches", "ochre", "ochry", "ocker", "ocrea", "octad", "octal", "octan", "octas", "octet", "octyl", "oculi", "odahs", "odals", "odder", "oddly", "odeon", "odeum", "odism", "odist", "odium", "odors", "odour", "odyle", "odyls", "ofays", "offal", "offed", "offer", "offie", "oflag", "often", "ofter", "ogams", "ogeed", "ogees", "oggin", "ogham", "ogive", "ogled", "ogler", "ogles", "ogmic", "ogres", "ohias", "ohing", "ohmic", "ohone", "oidia", "oiled", "oiler", "oinks", "oints", "ojime", "okapi", "okays", "okehs", "okras", "oktas", "olden", "older", "oldie", "oleic", "olein", "olent", "oleos", "oleum", "olios", "olive", "ollas", "ollav", "oller", "ollie", "ology", "olpae", "olpes", "omasa", "omber", "ombre", "ombus", "omega", "omens", "omers", "omits", "omlah", "omovs", "omrah", "oncer", "onces", "oncet", "oncus", "onely", "oners", "onery", "onion", "onium", "onkus", "onlay", "onned", "onset", "ontic", "oobit", "oohed", "oomph", "oonts", "ooped", "oorie", "ooses", "ootid", "oozed", "oozes", "opahs", "opals", "open ", "opens", "opepe", "opera", "opine", "oping", "opium", "oppos", "opsin", "opted", "opter", "optic", "orach", "oracy", "orals", "orang", "orant", "orate", "orbed", "orbit", "orcas", "orcin", "order", "ordos", "oread", "orfes", "organ", "orgia", "orgic", "orgue", "oribi", "oriel", "orixa", "orles", "orlon", "orlop", "ormer", "ornis", "orpin", "orris", "ortho", "orval", "orzos", "oscar", "oshac", "osier", "osmic", "osmol", "ossia", "ostia", "otaku", "otary", "other", "ottar", "otter", "ottos", "oubit", "oucht", "ouens", "ought", "ouija", "oulks", "oumas", "ounce", "oundy", "oupas", "ouped", "ouphe", "ouphs", "ourie", "ousel", "ousts", "outby", "outdo", "outed", "outer", "outgo", "outre", "outro", "outta", "ouzel", "ouzos", "ovals", "ovary", "ovate", "ovels", "ovens", "overs", "overt", "ovine", "ovist", "ovoid", "ovoli", "ovolo", "ovule", "owche", "owies", "owing", "owled", "owler", "owlet", "owned", "owner", "owres", "owrie", "owsen", "oxbow", "oxers", "oxeye", "oxide", "oxids", "oxies", "oxime", "oxims", "oxlip", "oxter", "oyers", "ozeki", "ozone", "ozzie", "paals", "paans", "pacas", "paced", "pacer", "paces", "pacey", "pacha", "packs", "pacos", "pacta", "pacts", "paddy", "padis", "padle", "padma", "padre", "padri", "paean", "paedo", "paeon", "pagan", "paged", "pager", "pages", "pagle", "pagod", "pagri", "paiks", "pails", "pains", "paint", "paire", "pairs", "paisa", "paise", "pakka", "palas", "palay", "palea", "paled", "paler", "pales", "palet", "palis", "palki", "palla", "palls", "pally", "palms", "palmy", "palpi", "palps", "palsa", "palsy", "pampa", "panax", "pance", "panda", "pands", "pandy", "paned", "panel", "panes", "panga", "pangs", "panic", "panim", "panko", "panne", "panni", "pansy", "panto", "pants", "panty", "paoli", "paolo", "papal", "papas", "papaw", "paper", "papes", "pappi", "pappy", "parae", "paras", "parch", "pardi", "pards", "pardy", "pared", "paren", "pareo", "parer", "pares", "pareu", "parev", "parge", "pargo", "paris", "parka", "parki", "parks", "parky", "parle", "parly", "parma", "parol", "parps", "parra", "parrs", "parry", "parse", "parti", "parts", "party", "parve", "parvo", "paseo", "pases", "pasha", "pashm", "paska", "paspy", "passe", "pasta", "paste", "pasts", "pasty", "patch", "pated", "paten", "pater", "pates", "paths", "patin", "patio", "patka", "patly", "patsy", "patte", "patty", "patus", "pauas", "pauls", "pause", "pavan", "paved", "paven", "paver", "paves", "pavid", "pavin", "pavis", "pawas", "pawaw", "pawed", "pawer", "pawks", "pawky", "pawls", "pawns", "paxes", "payed", "payee", "payer", "payor", "paysd", "peace", "peach", "peage", "peags", "peaks", "peaky", "peals", "peans", "peare", "pearl", "pears", "peart", "pease", "peats", "peaty", "peavy", "peaze", "pebas", "pecan", "pechs", "pecke", "pecks", "pecky", "pedal", "pedes", "pedis", "pedro", "peece", "peeks", "peels", "peens", "peeoy", "peepe", "peeps", "peers", "peery", "peeve", "peggy", "peghs", "peins", "peise", "peize", "pekan", "pekes", "pekin", "pekoe", "pelas", "pelau", "peles", "pelfs", "pells", "pelma", "pelon", "pelta", "pelts", "penal", "pence", "pends", "pendu", "pened", "penes", "pengo", "penie", "penis", "penks", "penna", "penne", "penni", "penny", "pents", "peons", "peony", "pepla", "pepos", "peppy", "pepsi", "perai", "perce", "perch", "percs", "perdu", "perdy", "perea", "peres", "peril", "peris", "perks", "perky", "perms", "perns", "perog", "perps", "perry", "perse", "perst", "perts", "perve", "pervo", "pervs", "pervy", "pesky", "pesos", "pesto", "pests", "pesty", "petal", "petar", "peter", "petit", "petre", "petri", "petti", "petto", "petty", "pewee", "pewit", "peyse", "phage", "phang", "phare", "pharm", "phase", "pheer", "phene", "pheon", "phese", "phial", "phish", "phizz", "phlox", "phoca", "phone", "phono", "phons", "phony", "photo", "phots", "phpht", "phuts", "phyla", "phyle", "piani", "piano", "pians", "pibal", "pical", "picas", "piccy", "picks", "picky", "picot", "picra", "picul", "piece", "piend", "piers", "piert", "pieta", "piets", "piety", "piezo", "piggy", "pight", "pigmy", "piing", "pikas", "pikau", "piked", "piker", "pikes", "pikey", "pikis", "pikul", "pilae", "pilaf", "pilao", "pilar", "pilau", "pilaw", "pilch", "pilea", "piled", "pilei", "piler", "piles", "pilis", "pills", "pilot", "pilow", "pilum", "pilus", "pimas", "pimps", "pinas", "pinch", "pined", "pines", "piney", "pingo", "pings", "pinko", "pinks", "pinky", "pinna", "pinny", "pinon", "pinot", "pinta", "pinto", "pints", "pinup", "pions", "piony", "pious", "pioye", "pioys", "pipal", "pipas", "piped", "piper", "pipes", "pipet", "pipis", "pipit", "pippy", "pipul", "pique", "pirai", "pirls", "pirns", "pirog", "pisco", "pises", "pisky", "pisos", "pissy", "piste", "pitas", "pitch", "piths", "pithy", "piton", "pitot", "pitta", "piums", "pivot", "pixel", "pixes", "pixie", "pized", "pizes", "pizza", "plaas", "place", "plack", "plage", "plaid", "plain", "plait", "plane", "plank", "plans", "plant", "plaps", "plash", "plasm", "plast", "plate", "plats", "platt", "platy", "playa", "plays", "plaza", "plead", "pleas", "pleat", "plebe", "plebs", "plena", "pleon", "plesh", "plews", "plica", "plied", "plier", "plies", "plims", "pling", "plink", "ploat", "plods", "plong", "plonk", "plook", "plops", "plots", "plotz", "plouk", "plows", "ploye", "ploys", "pluck", "plues", "pluff", "plugs", "plumb", "plume", "plump", "plums", "plumy", "plunk", "pluot", "plush", "pluto", "plyer", "poach", "poaka", "poake", "poboy", "pocks", "pocky", "pod  ", "podal", "poddy", "podex", "podge", "podgy", "podia", "podle", "poems", "poeps", "poesy", "poets", "pogey", "pogge", "pogos", "pohed", "poilu", "poind", "point", "poise", "pokal", "poked", "poker", "pokes", "pokey", "pokie", "polar", "poled", "poler", "poles", "poley", "polio", "polis", "polje", "polka", "polks", "polls", "polly", "polos", "polts", "polyp", "polys", "pombe", "pomes", "pommy", "pomos", "pomps", "ponce", "poncy", "ponds", "pones", "poney", "ponga", "pongo", "pongs", "pongy", "ponks", "ponts", "ponty", "ponzu", "pooch", "poods", "pooed", "poofs", "poofy", "poohs", "pooja", "pooka", "pooks", "pools", "poons", "poops", "poopy", "poori", "poort", "poots", "poove", "poovy", "popes", "poppa", "poppy", "popsy", "porae", "poral", "porch", "pored", "porer", "pores", "porge", "porgy", "porin", "porks", "porky", "porno", "porns", "porny", "porta", "ports", "porty", "posed", "poser", "poses", "posey", "posho", "posit", "posse", "posts", "potae", "potch", "poted", "potes", "potin", "potoo", "potsy", "potto", "potts", "potty", "pouch", "pouff", "poufs", "pouke", "pouks", "poule", "poulp", "poult", "pound", "poupe", "poupt", "pours", "pouts", "pouty", "powan", "power", "powin", "pownd", "powns", "powny", "powre", "poxed", "poxes", "poynt", "poyou", "poyse", "pozzy", "praam", "prads", "prahu", "prams", "prana", "prang", "prank", "praos", "prase", "prate", "prats", "pratt", "praty", "praus", "prawn", "prays", "predy", "preed", "preen", "prees", "preif", "prems", "premy", "prent", "preon", "preop", "preps", "presa", "prese", "press", "prest", "preve", "prexy", "preys", "prial", "price", "prick", "pricy", "pride", "pried", "prief", "prier", "pries", "prigs", "prill", "prima", "prime", "primi", "primo", "primp", "prims", "primy", "prink", "print", "prion", "prior", "prise", "prism", "priss", "privy", "prize", "proas", "probe", "probs", "prods", "proem", "profs", "progs", "proin", "proke", "prole", "proll", "promo", "proms", "prone", "prong", "pronk", "proof", "props", "prore", "prose", "proso", "pross", "prost", "prosy", "proto", "proud", "proul", "prove", "prowl", "prows", "proxy", "proyn", "prude", "prune", "prunt", "pruta", "pryer", "pryse", "psalm", "pseud", "pshaw", "psion", "psoae", "psoai", "psoas", "psora", "psych", "psyop", "pubco", "pubes", "pubic", "pubis", "pucan", "pucer", "puces", "pucka", "pucks", "puddy", "pudge", "pudgy", "pudic", "pudor", "pudsy", "pudus", "puers", "puffa", "puffs", "puffy", "puggy", "pugil", "puhas", "pujah", "pujas", "pukas", "puked", "puker", "pukes", "pukey", "pukka", "pukus", "pulao", "pulas", "puled", "puler", "pules", "pulik", "pulis", "pulka", "pulks", "pulli", "pulls", "pully", "pulmo", "pulps", "pulpy", "pulse", "pulus", "pumas", "pumie", "pumps", "punas", "punce", "punch", "punga", "pungs", "punji", "punka", "punks", "punky", "punny", "punto", "punts", "punty", "pupae", "pupal", "pupas", "pupil", "puppy", "pupus", "purda", "pured", "puree", "purer", "pures", "purge", "purin", "puris", "purls", "purpy", "purrs", "purse", "pursy", "purty", "puses", "pushy", "pusle", "pussy", "putid", "puton", "putti", "putto", "putts", "putty", "puzel", "pwned", "pyats", "pyets", "pygal", "pygmy", "pyins", "pylon", "pyned", "pynes", "pyoid", "pyots", "pyral", "pyran", "pyres", "pyrex", "pyric", "pyros", "pyxed", "pyxes", "pyxie", "pyxis", "pzazz", "qadis", "qaids", "qajaq", "qanat", "qapik", "qibla", "qophs", "qorma", "quack", "quads", "quaff", "quags", "quail", "quair", "quais", "quake", "quaky", "quale", "qualm", "quant", "quare", "quark", "quart", "quash", "quasi", "quass", "quate", "quats", "quayd", "quays", "qubit", "quean", "queen", "queer", "quell", "queme", "quena", "quern", "query", "quest", "queue", "queyn", "queys", "quich", "quick", "quids", "quiet", "quiff", "quill", "quilt", "quims", "quina", "quine", "quino", "quins", "quint", "quipo", "quips", "quipu", "quire", "quirk", "quirt", "quist", "quite", "quits", "quoad", "quods", "quoif", "quoin", "quoit", "quoll", "quonk", "quops", "quota", "quote", "quoth", "qursh", "quyte", "rabat", "rabbi", "rabic", "rabid", "rabis", "raced", "racer", "races", "rache", "racks", "racon", "radar", "radge", "radii", "radio", "radix", "radon", "raffs", "rafts", "ragas", "ragde", "raged", "ragee", "rager", "rages", "ragga", "raggs", "raggy", "ragis", "ragus", "rahed", "rahui", "raias", "raids", "raiks", "raile", "rails", "raine", "rains", "rainy", "raird", "raise", "raita", "raits", "rajah", "rajas", "rajes", "raked", "rakee", "raker", "rakes", "rakia", "rakis", "rakus", "rales", "rally", "ralph", "ramal", "ramee", "ramen", "ramet", "ramie", "ramin", "ramis", "rammy", "ramps", "ramus", "ranas", "rance", "ranch", "rands", "randy", "ranee", "ranga", "range", "rangi", "rangs", "rangy", "ranid", "ranis", "ranke", "ranks", "rants", "raped", "raper", "rapes", "raphe", "rapid", "rappe", "rared", "raree", "rarer", "rares", "rarks", "rased", "raser", "rases", "rasps", "raspy", "rasse", "rasta", "ratal", "ratan", "ratas", "ratch", "rated", "ratel", "rater", "rates", "ratha", "rathe", "raths", "ratio", "ratoo", "ratos", "ratty", "ratus", "rauns", "raupo", "raved", "ravel", "raven", "raver", "raves", "ravey", "ravin", "rawer", "rawin", "rawly", "rawns", "raxed", "raxes", "rayah", "rayas", "rayed", "rayle", "rayne", "rayon", "razed", "razee", "razer", "razes", "razoo", "razor", "reach", "react", "readd", "reads", "ready", "reais", "reaks", "realm", "realo", "reals", "reame", "reams", "reamy", "reans", "reaps", "rearm", "rears", "reast", "reata", "reate", "reave", "rebar", "rebbe", "rebec", "rebel", "rebid", "rebit", "rebop", "rebus", "rebut", "rebuy", "recal", "recap", "recce", "recco", "reccy", "recit", "recks", "recon", "recta", "recti", "recto", "recur", "recut", "redan", "redds", "reddy", "reded", "redes", "redia", "redid", "redip", "redly", "redon", "redos", "redox", "redry", "redub", "redux", "redye", "reech", "reede", "reeds", "reedy", "reefs", "reefy", "reeks", "reeky", "reels", "reens", "reest", "reeve", "refed", "refel", "refer", "reffo", "refis", "refit", "refix", "refly", "refry", "regal", "regar", "reges", "reggo", "regie", "regma", "regna", "regos", "regur", "rehab", "rehem", "reifs", "reify", "reign", "reiki", "reiks", "reink", "reins", "reird", "reist", "reive", "rejig", "rejon", "reked", "rekes", "rekey", "relax", "relay", "relet", "relic", "relie", "relit", "rello", "reman", "remap", "remen", "remet", "remex", "remit", "remix", "renal", "renay", "rends", "renew", "reney", "renga", "renig", "renin", "renne", "renos", "rente", "rents", "reoil", "reorg", "repay", "repeg", "repel", "repin", "repla", "reply", "repos", "repot", "repps", "repro", "reran", "rerig", "rerun", "resat", "resaw", "resay", "resee", "reses", "reset", "resew", "resid", "resin", "resit", "resod", "resow", "resto", "rests", "resty", "resus", "retag", "retax", "retch", "retem", "retia", "retie", "retox", "retro", "retry", "reuse", "revel", "revet", "revie", "revue", "rewan", "rewax", "rewed", "rewet", "rewin", "rewon", "rewth", "rexes", "rezes", "rheas", "rheme", "rheum", "rhies", "rhime", "rhine", "rhino", "rhody", "rhomb", "rhone", "rhumb", "rhyme", "rhyne", "rhyta", "riads", "rials", "riant", "riata", "ribas", "ribby", "ribes", "riced", "ricer", "rices", "ricey", "richt", "ricin", "ricks", "rider", "rides", "ridge", "ridgy", "ridic", "riels", "riems", "rieve", "rifer", "riffs", "rifle", "rifte", "rifts", "rifty", "riggs", "right", "rigid", "rigol", "rigor", "riled", "riles", "riley", "rille", "rills", "rimae", "rimed", "rimer", "rimes", "rimus", "rinds", "rindy", "rines", "rings", "rinks", "rinse", "rioja", "riots", "riped", "ripen", "riper", "ripes", "ripps", "risen", "riser", "rises", "rishi", "risks", "risky", "risps", "risus", "rites", "ritts", "ritzy", "rival", "rivas", "rived", "rivel", "riven", "river", "rives", "rivet", "riyal", "rizas", "roach", "roads", "roams", "roans", "roars", "roary", "roast", "roate", "robed", "robes", "robin", "roble", "robot", "rocks", "rocky", "roded", "rodeo", "rodes", "roger", "rogue", "roguy", "rohes", "roids", "roils", "roily", "roins", "roist", "rojak", "rojis", "roked", "roker", "rokes", "rolag", "roles", "rolfs", "rolls", "romal", "roman", "romeo", "romps", "ronde", "rondo", "roneo", "rones", "ronin", "ronne", "ronte", "ronts", "roods", "roofs", "roofy", "rooks", "rooky", "rooms", "roomy", "roons", "roops", "roopy", "roosa", "roose", "roost", "roots", "rooty", "roped", "roper", "ropes", "ropey", "roque", "roral", "rores", "roric", "rorid", "rorie", "rorts", "rorty", "rosed", "roses", "roset", "roshi", "rosin", "rosit", "rosti", "rosts", "rotal", "rotan", "rotas", "rotch", "roted", "rotes", "rotis", "rotls", "roton", "rotor", "rotos", "rotte", "rouen", "roues", "rouge", "rough", "roule", "rouls", "roums", "round", "roups", "roupy", "rouse", "roust", "route", "routh", "routs", "roved", "roven", "rover", "roves", "rowan", "rowdy", "rowed", "rowel", "rowen", "rower", "rowie", "rowme", "rownd", "rowth", "rowts", "royal", "royne", "royst", "rozet", "rozit", "ruana", "rubai", "rubby", "rubel", "rubes", "rubin", "ruble", "rubli", "rubus", "ruche", "rucks", "rudas", "rudds", "ruddy", "ruder", "rudes", "rudie", "rudis", "rueda", "ruers", "ruffe", "ruffs", "rugae", "rugal", "rugby", "ruggy", "ruing", "ruins", "rukhs", "ruled", "ruler", "rules", "rumal", "rumba", "rumbo", "rumen", "rumes", "rumly", "rummy", "rumor", "rumpo", "rumps", "rumpy", "runch", "runds", "runed", "runes", "rungs", "runic", "runny", "runts", "runty", "rupee", "rupia", "rural", "rurps", "rurus", "rusas", "ruses", "rushy", "rusks", "rusma", "russe", "rusts", "rusty", "ruths", "rutin", "rutty", "ryals", "rybat", "ryked", "rykes", "rymme", "rynds", "ryots", "ryper", "saags", "sabal", "sabed", "saber", "sabes", "sabha", "sabin", "sabir", "sable", "sabot", "sabra", "sabre", "sacks", "sacra", "saddo", "sades", "sadhe", "sadhu", "sadis", "sadly", "sados", "sadza", "safed", "safer", "safes", "sagas", "sager", "sages", "saggy", "sagos", "sagum", "saheb", "sahib", "saice", "saick", "saics", "saids", "saiga", "sails", "saims", "saine", "sains", "saint", "sairs", "saist", "saith", "sajou", "sakai", "saker", "sakes", "sakia", "sakis", "sakti", "salad", "salal", "salat", "salep", "sales", "salet", "salic", "salix", "salle", "sally", "salmi", "salol", "salon", "salop", "salpa", "salps", "salsa", "salse", "salto", "salts", "salty", "salue", "salut", "salve", "salvo", "saman", "samas", "samba", "sambo", "samek", "samel", "samen", "sames", "samey", "samfu", "sammy", "sampi", "samps", "sands", "sandy", "saned", "saner", "sanes", "sanga", "sangh", "sango", "sangs", "sanko", "sansa", "santo", "sants", "saola", "sapan", "sapid", "sapor", "sappy", "saran", "sards", "sared", "saree", "sarge", "sargo", "sarin", "saris", "sarks", "sarky", "sarod", "saros", "sarus", "saser", "sasin", "sasse", "sassy", "satai", "satay", "sated", "satem", "sates", "satin", "satis", "satyr", "sauba", "sauce", "sauch", "saucy", "saugh", "sauls", "sault", "sauna", "saunt", "saury", "saute", "sauts", "saved", "saver", "saves", "savey", "savin", "savor", "savoy", "savvy", "sawah", "sawed", "sawer", "saxes", "sayed", "sayer", "sayid", "sayne", "sayon", "sayst", "sazes", "scabs", "scads", "scaff", "scags", "scail", "scala", "scald", "scale", "scall", "scalp", "scaly", "scamp", "scams", "scand", "scans", "scant", "scapa", "scape", "scapi", "scare", "scarf", "scarp", "scars", "scart", "scary", "scath", "scats", "scatt", "scaud", "scaup", "scaur", "scaws", "sceat", "scena", "scend", "scene", "scent", "schav", "schmo", "schul", "schwa", "scion", "sclim", "scody", "scoff", "scogs", "scold", "scone", "scoog", "scoop", "scoot", "scopa", "scope", "scops", "score", "scorn", "scots", "scoug", "scoup", "scour", "scout", "scowl", "scowp", "scows", "scrab", "scrae", "scrag", "scram", "scran", "scrap", "scrat", "scraw", "scray", "scree", "screw", "scrim", "scrip", "scrob", "scrod", "scrog", "scrow", "scrub", "scrum", "scuba", "scudi", "scudo", "scuds", "scuff", "scuft", "scugs", "sculk", "scull", "sculp", "sculs", "scums", "scups", "scurf", "scurs", "scuse", "scuta", "scute", "scuts", "scuzz", "scyes", "sdayn", "sdein", "seals", "seame", "seams", "seamy", "seans", "seare", "sears", "sease", "seats", "seaze", "sebum", "secco", "sechs", "sects", "sedan", "seder", "sedes", "sedge", "sedgy", "sedum", "seeds", "seedy", "seeks", "seeld", "seels", "seely", "seems", "seeps", "seepy", "seers", "sefer", "segar", "segni", "segno", "segol", "segos", "segue", "sehri", "seifs", "seils", "seine", "seirs", "seise", "seism", "seity", "seiza", "seize", "sekos", "sekts", "selah", "seles", "selfs", "sella", "selle", "sells", "selva", "semee", "semen", "semes", "semie", "semis", "senas", "sends", "senes", "sengi", "senna", "senor", "sensa", "sense", "sensi", "sente", "senti", "sents", "senvy", "senza", "sepad", "sepal", "sepia", "sepic", "sepoy", "septa", "septs", "serac", "serai", "seral", "sered", "serer", "seres", "serfs", "serge", "seric", "serif", "serin", "serks", "seron", "serow", "serra", "serre", "serrs", "serry", "serum", "serve", "servo", "sesey", "sessa", "setae", "setal", "seton", "setts", "setup", "seven", "sever", "sewan", "sewar", "sewed", "sewel", "sewen", "sewer", "sewin", "sexed", "sexer", "sexes", "sexto", "sexts", "seyen", "shack", "shade", "shads", "shady", "shaft", "shags", "shahs", "shake", "shako", "shakt", "shaky", "shale", "shall", "shalm", "shalt", "shaly", "shama", "shame", "shams", "shand", "shank", "shans", "shape", "shaps", "shard", "share", "shark", "sharn", "sharp", "shash", "shaul", "shave", "shawl", "shawm", "shawn", "shaws", "shaya", "shays", "shchi", "sheaf", "sheal", "shear", "sheas", "sheds", "sheel", "sheen", "sheep", "sheer", "sheet", "sheik", "shelf", "shell", "shend", "shent", "sheol", "sherd", "shere", "shero", "shets", "sheva", "shewn", "shews", "shiai", "shied", "shiel", "shier", "shies", "shift", "shill", "shily", "shims", "shine", "shins", "shiny", "ships", "shire", "shirk", "shirr", "shirs", "shirt", "shish", "shiso", "shist", "shite", "shits", "shiur", "shiva", "shive", "shivs", "shlep", "shlub", "shmek", "shmoe", "shoal", "shoat", "shock", "shoe ", "shoed", "shoer", "shoes", "shogi", "shogs", "shoji", "shojo", "shola", "shone", "shook", "shool", "shoon", "shoos", "shoot", "shope", "shops", "shore", "shorl", "shorn", "short", "shote", "shots", "shott", "shout", "shove", "showd", "shown", "shows", "showy", "shoyu", "shred", "shrew", "shris", "shrow", "shrub", "shrug", "shtik", "shtum", "shtup", "shuck", "shule", "shuln", "shuls", "shuns", "shunt", "shura", "shush", "shute", "shuts", "shwas", "shyer", "shyly", "sials", "sibbs", "sibyl", "sices", "sicht", "sicko", "sicks", "sicky", "sidas", "sided", "sider", "sides", "sidha", "sidhe", "sidle", "siege", "sield", "siens", "sient", "sieth", "sieur", "sieve", "sifts", "sighs", "sight", "sigil", "sigla", "sigma", "signa", "signs", "sijos", "sikas", "siker", "sikes", "silds", "siled", "silen", "siler", "siles", "silex", "silks", "silky", "sills", "silly", "silos", "silts", "silty", "silva", "simar", "simas", "simba", "simis", "simps", "simul", "since", "sinds", "sined", "sines", "sinew", "singe", "sings", "sinhs", "sinks", "sinky", "sinus", "siped", "sipes", "sippy", "sired", "siree", "siren", "sires", "sirih", "siris", "siroc", "sirra", "sirup", "sisal", "sises", "sissy", "sista", "sists", "sitar", "sited", "sites", "sithe", "sitka", "situp", "situs", "siver", "sixer", "sixes", "sixmo", "sixte", "sixth", "sixty", "sizar", "sized", "sizel", "sizer", "sizes", "skags", "skail", "skald", "skank", "skart", "skate", "skats", "skatt", "skaws", "skean", "skear", "skeds", "skeed", "skeef", "skeen", "skeer", "skees", "skeet", "skegg", "skegs", "skein", "skelf", "skell", "skelm", "skelp", "skene", "skens", "skeos", "skeps", "skers", "skets", "skews", "skids", "skied", "skier", "skies", "skiey", "skiff", "skill", "skimo", "skimp", "skims", "skink", "skins", "skint", "skios", "skips", "skirl", "skirr", "skirt", "skite", "skits", "skive", "skivy", "sklim", "skoal", "skody", "skoff", "skogs", "skols", "skool", "skoot", "skort", "skosh", "skran", "skrik", "skuas", "skugs", "skulk", "skull", "skunk", "skyed", "skyer", "skyey", "skyfs", "skyre", "skyrs", "skyte", "slabs", "slack", "slade", "slaes", "slags", "slaid", "slain", "slake", "slams", "slane", "slang", "slank", "slant", "slaps", "slart", "slash", "slate", "slats", "slaty", "slave", "slaws", "slays", "slebs", "sleds", "sleek", "sleep", "sleer", "sleet", "slept", "slews", "sleys", "slice", "slick", "slide", "slier", "slily", "slime", "slims", "slimy", "sling", "slink", "slipe", "slips", "slipt", "slish", "slits", "slive", "sloan", "slobs", "sloes", "slogs", "sloid", "slojd", "slomo", "sloom", "sloop", "sloot", "slope", "slops", "slopy", "slorm", "slosh", "sloth", "slots", "slove", "slows", "sloyd", "slubb", "slubs", "slued", "slues", "sluff", "slugs", "sluit", "slump", "slums", "slung", "slunk", "slurb", "slurp", "slurs", "sluse", "slush", "sluts", "slyer", "slyly", "slype", "smaak", "smack", "smaik", "small", "smalm", "smalt", "smarm", "smart", "smash", "smaze", "smear", "smeek", "smees", "smeik", "smeke", "smell", "smelt", "smerk", "smews", "smile", "smirk", "smirr", "smirs", "smite", "smith", "smits", "smock", "smogs", "smoke", "smoko", "smoky", "smolt", "smoor", "smoot", "smore", "smorg", "smote", "smout", "smowt", "smugs", "smurs", "smush", "smuts", "snabs", "snack", "snafu", "snags", "snail", "snake", "snaky", "snaps", "snare", "snarf", "snark", "snarl", "snars", "snary", "snash", "snath", "snaws", "snead", "sneak", "sneap", "snebs", "sneck", "sneds", "sneed", "sneer", "snees", "snell", "snibs", "snick", "snide", "snies", "sniff", "snift", "snigs", "snipe", "snips", "snipy", "snirt", "snits", "snobs", "snods", "snoek", "snoep", "snogs", "snoke", "snood", "snook", "snool", "snoop", "snoot", "snore", "snort", "snots", "snout", "snowk", "snows", "snowy", "snubs", "snuck", "snuff", "snugs", "snush", "snyes", "soaks", "soaps", "soapy", "soare", "soars", "soave", "sobas", "sober", "socas", "soces", "socko", "socks", "socle", "sodas", "soddy", "sodic", "sodom", "sofar", "sofas", "soft ", "softa", "softs", "softy", "soger", "soggy", "sohur", "soils", "soily", "sojas", "sojus", "sokah", "soken", "sokes", "sokol", "solah", "solan", "solar", "solas", "solde", "soldi", "soldo", "solds", "soled", "solei", "soler", "soles", "solid", "solon", "solos", "solum", "solus", "solve", "soman", "somas", "sonar", "sonce", "sonde", "sones", "songs", "sonic", "sonly", "sonne", "sonny", "sonse", "sonsy", "sooey", "sooks", "sooky", "soole", "sools", "sooms", "soops", "soote", "sooth", "soots", "sooty", "sophs", "sophy", "sopor", "soppy", "sopra", "soral", "soras", "sorbo", "sorbs", "sorda", "sordo", "sords", "sored", "soree", "sorel", "sorer", "sores", "sorex", "sorgo", "sorns", "sorra", "sorry", "sorta", "sorts", "sorus", "soths", "sotol", "souce", "souct", "sough", "souks", "souls", "soums", "sound", "soups", "soupy", "sours", "souse", "south", "souts", "sowar", "sowce", "sowed", "sower", "sowff", "sowfs", "sowle", "sowls", "sowms", "sownd", "sowne", "sowps", "sowse", "sowth", "soyas", "soyle", "soyuz", "sozin", "space", "spacy", "spade", "spado", "spaed", "spaer", "spaes", "spags", "spahi", "spail", "spain", "spait", "spake", "spald", "spale", "spall", "spalt", "spams", "spane", "spang", "spank", "spans", "spard", "spare", "spark", "spars", "spart", "spasm", "spate", "spats", "spaul", "spawl", "spawn", "spaws", "spayd", "spays", "spaza", "spazz", "speak", "speal", "spean", "spear", "speat", "speck", "specs", "spect", "speed", "speel", "speer", "speil", "speir", "speks", "speld", "spelk", "spell", "spelt", "spend", "spent", "speos", "sperm", "spets", "speug", "spews", "spewy", "spial", "spica", "spice", "spick", "spics", "spicy", "spide", "spied", "spiel", "spier", "spies", "spiff", "spifs", "spike", "spiks", "spiky", "spile", "spill", "spilt", "spims", "spina", "spine", "spink", "spins", "spiny", "spire", "spirt", "spiry", "spite", "spits", "spitz", "spivs", "splat", "splay", "split", "splog", "spode", "spods", "spoil", "spoke", "spoof", "spook", "spool", "spoom", "spoon", "spoor", "spoot", "spore", "spork", "sport", "sposh", "spots", "spout", "sprad", "sprag", "sprat", "spray", "spred", "spree", "sprew", "sprig", "sprit", "sprod", "sprog", "sprue", "sprug", "spuds", "spued", "spuer", "spues", "spugs", "spule", "spume", "spumy", "spunk", "spurn", "spurs", "spurt", "sputa", "spyal", "spyre", "squab", "squad", "squat", "squaw", "squeg", "squib", "squid", "squit", "squiz", "stabs", "stack", "stade", "staff", "stage", "stags", "stagy", "staid", "staig", "stain", "stair", "stake", "stale", "stalk", "stall", "stamp", "stand", "stane", "stang", "stank", "staph", "staps", "stare", "stark", "starn", "starr", "stars", "start", "stash", "state", "stats", "staun", "stave", "staws", "stays", "stead", "steak", "steal", "steam", "stean", "stear", "stedd", "stede", "steds", "steed", "steek", "steel", "steem", "steen", "steep", "steer", "steil", "stein", "stela", "stele", "stell", "steme", "stems", "stend", "steno", "stens", "stent", "steps", "stept", "stere", "stern", "stets", "stews", "stewy", "steys", "stich", "stick", "stied", "sties", "stiff", "stilb", "stile", "still", "stilt", "stime", "stims", "stimy", "sting", "stink", "stint", "stipa", "stipe", "stire", "stirk", "stirp", "stirs", "stive", "stivy", "stoae", "stoai", "stoas", "stoat", "stobs", "stock", "stoep", "stogy", "stoic", "stoit", "stoke", "stole", "stoln", "stoma", "stomp", "stond", "stone", "stong", "stonk", "stonn", "stony", "stood", "stook", "stool", "stoop", "stoor", "stope", "stops", "stopt", "store", "stork", "storm", "story", "stoss", "stots", "stott", "stoun", "stoup", "stour", "stout", "stove", "stown", "stowp", "stows", "strad", "strae", "strag", "strak", "strap", "straw", "stray", "strep", "strew", "stria", "strig", "strim", "strip", "strop", "strow", "stroy", "strum", "strut", "stubs", "stuck", "stude", "studs", "study", "stuff", "stull", "stulm", "stumm", "stump", "stums", "stung", "stunk", "stuns", "stunt", "stupa", "stupe", "sture", "sturt", "styed", "styes", "style", "styli", "stylo", "styme", "stymy", "styre", "styte", "suave", "subah", "subas", "subby", "suber", "subha", "succi", "sucks", "sucky", "sucre", "sudds", "sudor", "sudsy", "suede", "suent", "suers", "suete", "suets", "suety", "sugan", "sugar", "sughs", "sugos", "suhur", "suids", "suing", "suint", "suite", "suits", "sujee", "sukhs", "sukuk", "sulci", "sulfa", "sulfo", "sulks", "sulky", "sully", "sulph", "sulus", "sumac", "sumis", "summa", "sumos", "sumph", "sumps", "sunis", "sunks", "sunna", "sunns", "sunny", "sunup", "super", "supes", "supra", "surah", "sural", "suras", "surat", "surds", "sured", "surer", "sures", "surfs", "surfy", "surge", "surgy", "surly", "surra", "sused", "suses", "sushi", "susus", "sutor", "sutra", "sutta", "swabs", "swack", "swads", "swage", "swags", "swail", "swain", "swale", "swaly", "swami", "swamp", "swamy", "swang", "swank", "swans", "swaps", "swapt", "sward", "sware", "swarf", "swarm", "swart", "swash", "swath", "swats", "swayl", "sways", "sweal", "swear", "sweat", "swede", "sweed", "sweel", "sweep", "sweer", "swees", "sweet", "sweir", "swell", "swelt", "swept", "swerf", "sweys", "swies", "swift", "swigs", "swile", "swill", "swims", "swine", "swing", "swink", "swipe", "swire", "swirl", "swish", "swiss", "swith", "swits", "swive", "swizz", "swobs", "swole", "swoln", "swoon", "swoop", "swops", "swopt", "sword", "swore", "sworn", "swots", "swoun", "swung", "sybbe", "sybil", "syboe", "sybow", "sycee", "syces", "sycon", "syens", "syker", "sykes", "sylis", "sylph", "sylva", "symar", "synch", "syncs", "synds", "syned", "synes", "synod", "synth", "syped", "sypes", "syphs", "syrah", "syren", "syrup", "sysop", "sythe", "syver", "taals", "taata", "tabby", "taber", "tabes", "tabid", "tabis", "tabla", "table", "taboo", "tabor", "tabun", "tabus", "tacan", "taces", "tacet", "tache", "tacho", "tachs", "tacit", "tacks", "tacky", "tacos", "tacts", "taels", "taffy", "tafia", "taggy", "tagma", "tahas", "tahrs", "taiga", "taigs", "taiko", "tails", "tains", "taint", "taira", "taish", "taits", "tajes", "takas", "taken", "taker", "takes", "takhi", "takin", "takis", "takky", "talak", "talaq", "talar", "talas", "talcs", "talcy", "talea", "taler", "tales", "talks", "talky", "talls", "tally", "talma", "talon", "talpa", "taluk", "talus", "tamal", "tamed", "tamer", "tames", "tamin", "tamis", "tammy", "tamps", "tanas", "tanga", "tangi", "tango", "tangs", "tangy", "tanhs", "tanka", "tanks", "tanky", "tanna", "tansy", "tanti", "tanto", "tanty", "tapas", "tape ", "taped", "tapen", "taper", "tapes", "tapet", "tapir", "tapis", "tappa", "tapus", "taras", "tardo", "tardy", "tared", "tares", "targa", "targe", "tarns", "taroc", "tarok", "taros", "tarot", "tarps", "tarre", "tarry", "tarsi", "tarts", "tarty", "tasar", "tased", "taser", "tases", "tasks", "tassa", "tasse", "tasso", "taste", "tasty", "tatar", "tater", "tates", "taths", "tatie", "tatou", "tatts", "tatty", "tatus", "taube", "tauld", "taunt", "tauon", "taupe", "tauts", "tavah", "tavas", "taver", "tawai", "tawas", "tawed", "tawer", "tawie", "tawny", "tawse", "tawts", "taxed", "taxer", "taxes", "taxis", "taxol", "taxon", "taxor", "taxus", "tayra", "tazza", "tazze", "teach", "teade", "teads", "teaed", "teaks", "teals", "teams", "tears", "teary", "tease", "teats", "teaze", "tech ", "techs", "techy", "tecta", "teddy", "teels", "teems", "teend", "teene", "teens", "teeny", "teers", "teeth", "teffs", "teggs", "tegua", "tegus", "tehrs", "teiid", "teils", "teind", "teins", "telae", "telco", "teles", "telex", "telia", "telic", "tells", "telly", "teloi", "telos", "temed", "temes", "tempi", "tempo", "temps", "tempt", "temse", "tench", "tends", "tendu", "tenes", "tenet", "tenge", "tenia", "tenne", "tenno", "tenny", "tenon", "tenor", "tense", "tenth", "tents", "tenty", "tenue", "tepal", "tepas", "tepee", "tepid", "tepoy", "terai", "teras", "terce", "terek", "teres", "terfe", "terfs", "terga", "terms", "terne", "terns", "terra", "terry", "terse", "terts", "tesla", "testa", "teste", "tests", "testy", "tetes", "teths", "tetra", "tetri", "teuch", "teugh", "tewed", "tewel", "tewit", "texas", "texes", "texts", "thack", "thagi", "thaim", "thale", "thali", "thana", "thane", "thang", "thank", "thans", "thanx", "tharm", "thars", "thaws", "thawy", "thebe", "theca", "theed", "theek", "thees", "theft", "thegn", "theic", "thein", "their", "thelf", "thema", "theme", "thens", "theow", "there", "therm", "these", "thesp", "theta", "thete", "thews", "thewy", "thick", "thief", "thigh", "thigs", "thilk", "thill", "thine", "thing", "think", "thins", "thiol", "third", "thirl", "thoft", "thole", "tholi", "thong", "thorn", "thoro", "thorp", "those", "thous", "thowl", "thrae", "thraw", "three", "threw", "thrid", "thrip", "throb", "throe", "throw", "thrum", "thuds", "thugs", "thuja", "thumb", "thump", "thunk", "thurl", "thuya", "thyme", "thymi", "thymy", "tians", "tiara", "tiars", "tibia", "tical", "ticca", "ticed", "tices", "tichy", "ticks", "ticky", "tidal", "tiddy", "tided", "tides", "tiers", "tiffs", "tifos", "tifts", "tiger", "tiges", "tight", "tigon", "tikas", "tikes", "tikis", "tikka", "tilak", "tilde", "tiled", "tiler", "tiles", "tills", "tilly", "tilth", "tilts", "timbo", "time ", "timed", "timer", "times", "timid", "timon", "timps", "tinas", "tinct", "tinds", "tinea", "tined", "tines", "tinge", "tings", "tinks", "tinny", "tints", "tinty", "tipis", "tippy", "tipsy", "tired", "tires", "tirls", "tiros", "tirrs", "titan", "titch", "titer", "tithe", "titis", "title", "titre", "titty", "titup", "tiyin", "tiyns", "tizes", "tizzy", "toads", "toady", "toast", "toaze", "tocks", "tocky", "tocos", "today", "todde", "toddy", "toeas", "toffs", "toffy", "tofts", "tofus", "togae", "togas", "toged", "toges", "togue", "tohos", "toile", "toils", "toing", "toise", "toits", "tokay", "toked", "token", "toker", "tokes", "tokos", "tolan", "tolar", "tolas", "toled", "toles", "tolls", "tolly", "tolts", "tolus", "tolyl", "toman", "tombs", "tomes", "tomia", "tommy", "tomos", "tonal", "tondi", "tondo", "toned", "toner", "tones", "toney", "tonga", "tongs", "tonic", "tonka", "tonks", "tonne", "tonus", "tools", "tooms", "toons", "tooth", "toots", "topaz", "toped", "topee", "topek", "toper", "topes", "tophe", "tophi", "tophs", "topic", "topis", "topoi", "topos", "toppy", "toque", "torah", "toran", "toras", "torch", "torcs", "tores", "toric", "torii", "toros", "torot", "torrs", "torse", "torsi", "torsk", "torso", "torta", "torte", "torts", "torus", "tosas", "tosed", "toses", "toshy", "tossy", "total", "toted", "totem", "toter", "totes", "totty", "touch", "tough", "touks", "touns", "tours", "touse", "tousy", "touts", "touze", "touzy", "towed", "towel", "tower", "towie", "towns", "towny", "towse", "towsy", "towts", "towze", "towzy", "toxic", "toxin", "toyed", "toyer", "toyon", "toyos", "tozed", "tozes", "tozie", "trabs", "trace", "track", "tract", "trade", "trads", "tragi", "traik", "trail", "train", "trait", "tramp", "trams", "trank", "tranq", "trans", "trant", "trape", "traps", "trapt", "trash", "trass", "trats", "tratt", "trave", "trawl", "trayf", "trays", "tread", "treat", "treck", "treed", "treen", "trees", "trefa", "treif", "treks", "trema", "trems", "trend", "tress", "trest", "trets", "trews", "treyf", "treys", "triac", "triad", "trial", "tribe", "trice", "trick", "tride", "tried", "trier", "tries", "triff", "trigo", "trigs", "trike", "trild", "trill", "trims", "trine", "trins", "triol", "trior", "trios", "tripe", "trips", "tripy", "trist", "trite", "troad", "troak", "troat", "trock", "trode", "trods", "trogs", "trois", "troke", "troll", "tromp", "trona", "tronc", "trone", "tronk", "trons", "troop", "trooz", "trope", "troth", "trots", "trout", "trove", "trows", "troys", "truce", "truck", "trued", "truer", "trues", "trugo", "trugs", "trull", "truly", "trump", "trunk", "truss", "trust", "truth", "tryer", "tryke", "tryma", "tryps", "tryst", "tsade", "tsadi", "tsars", "tsked", "tsuba", "tsubo", "tuans", "tuart", "tuath", "tubae", "tubal", "tubar", "tubas", "tubby", "tubed", "tuber", "tubes", "tucks", "tufas", "tuffe", "tuffs", "tufts", "tufty", "tugra", "tuile", "tuina", "tuism", "tuktu", "tules", "tulip", "tulle", "tulpa", "tulsi", "tumid", "tummy", "tumor", "tumps", "tumpy", "tunas", "tunds", "tuned", "tuner", "tunes", "tungs", "tunic", "tunny", "tupek", "tupik", "tuple", "tuque", "turbo", "turds", "turfs", "turfy", "turks", "turme", "turms", "turns", "turnt", "turps", "turrs", "tushy", "tusks", "tusky", "tutee", "tutor", "tutti", "tutty", "tutus", "tuxes", "tuyer", "twaes", "twain", "twals", "twang", "twank", "twats", "tways", "tweak", "tweed", "tweel", "tween", "tweep", "tweer", "tweet", "twerk", "twerp", "twice", "twier", "twigs", "twill", "twilt", "twine", "twink", "twins", "twiny", "twire", "twirl", "twirp", "twist", "twite", "twits", "twixt", "twoer", "twyer", "tyees", "tyers", "tying", "tyiyn", "tykes", "tyler", "tymps", "tynde", "tyned", "tynes", "typal", "typed", "types", "typey", "typic", "typos", "typps", "typto", "tyran", "tyred", "tyres", "tyros", "tythe", "tzars", "udals", "udder", "udons", "ugali", "ugged", "uhlan", "uhuru", "ukase", "ulama", "ulans", "ulcer", "ulema", "ulmin", "ulnad", "ulnae", "ulnar", "ulnas", "ulpan", "ultra", "ulvas", "ulyie", "ulzie", "umami", "umbel", "umber", "umble", "umbos", "umbra", "umbre", "umiac", "umiak", "umiaq", "ummah", "ummas", "ummed", "umped", "umphs", "umpie", "umpty", "umrah", "umras", "unais", "unapt", "unarm", "unary", "unaus", "unbag", "unban", "unbar", "unbed", "unbid", "unbox", "uncap", "unces", "uncia", "uncle", "uncos", "uncoy", "uncus", "uncut", "undam", "undee", "under", "undid", "undos", "undue", "undug", "uneth", "unfed", "unfit", "unfix", "ungag", "unget", "ungod", "ungot", "ungum", "unhat", "unhip", "unica", "unify", "union", "unite", "units", "unity", "unjam", "unked", "unket", "unkid", "unlaw", "unlay", "unled", "unlet", "unlid", "unlit", "unman", "unmet", "unmew", "unmix", "unpay", "unpeg", "unpen", "unpin", "unred", "unrid", "unrig", "unrip", "unsaw", "unsay", "unsee", "unset", "unsew", "unsex", "unsod", "untax", "untie", "until", "untin", "unwed", "unwet", "unwit", "unwon", "unzip", "upbow", "upbye", "updos", "updry", "upend", "upjet", "uplay", "upled", "uplit", "upped", "upper", "upran", "uprun", "upsee", "upset", "upsey", "uptak", "upter", "uptie", "uraei", "urali", "uraos", "urare", "urari", "urase", "urate", "urban", "urbex", "urbia", "urdee", "ureal", "ureas", "uredo", "ureic", "urena", "urent", "urged", "urger", "urges", "urial", "urine", "urite", "urman", "urnal", "urned", "urped", "ursae", "ursid", "urson", "urubu", "urvas", "usage", "users", "usher", "using", "usnea", "usque", "usual", "usure", "usurp", "usury", "uteri", "utile", "utter", "uveal", "uveas", "uvula", "vacua", "vaded", "vades", "vagal", "vague", "vagus", "vails", "vaire", "vairs", "vairy", "vakas", "vakil", "vales", "valet", "valid", "valis", "valor", "valse", "value", "valve", "vamps", "vampy", "vanda", "vaned", "vanes", "vangs", "vants", "vaped", "vaper", "vapes", "vapid", "vapor", "varan", "varas", "vardy", "varec", "vares", "varia", "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty", "vatic", "vatus", "vauch", "vault", "vaunt", "vaute", "vauts", "vawte", "vaxes", "veale", "veals", "vealy", "veena", "veeps", "veers", "veery", "vegan", "vegas", "veges", "vegie", "vegos", "vehme", "veils", "veily", "veins", "veiny", "velar", "velds", "veldt", "veles", "vells", "velum", "venae", "venal", "vends", "vendu", "veney", "venge", "venin", "venom", "vents", "venue", "venus", "verbs", "verge", "verra", "verry", "verse", "verso", "verst", "verts", "vertu", "verve", "vespa", "vesta", "vests", "vetch", "vexed", "vexer", "vexes", "vexil", "vezir", "vials", "viand", "vibes", "vibex", "vibey", "vicar", "viced", "vices", "vichy", "video", "viers", "views", "viewy", "vifda", "viffs", "vigas", "vigia", "vigil", "vigor", "vilde", "viler", "villa", "villi", "vills", "vimen", "vinal", "vinas", "vinca", "vined", "viner", "vines", "vinew", "vinic", "vinos", "vints", "vinyl", "viola", "viold", "viols", "viper", "viral", "vired", "vireo", "vires", "virga", "virge", "virid", "virls", "virtu", "virus", "visas", "vised", "vises", "visie", "visit", "visne", "vison", "visor", "vista", "visto", "vitae", "vital", "vitas", "vitex", "vitro", "vitta", "vivas", "vivat", "vivda", "viver", "vives", "vivid", "vixen", "vizir", "vizor", "vleis", "vlies", "vlogs", "voars", "vocab", "vocal", "voces", "voddy", "vodka", "vodou", "vodun", "voema", "vogie", "vogue", "voice", "voids", "voila", "voile", "voips", "volae", "volar", "voled", "voles", "volet", "volks", "volta", "volte", "volti", "volts", "volva", "volve", "vomer", "vomit", "voted", "voter", "votes", "vouch", "vouge", "voulu", "vowed", "vowel", "vower", "voxel", "vozhd", "vraic", "vrils", "vroom", "vrous", "vrouw", "vrows", "vuggs", "vuggy", "vughs", "vughy", "vulgo", "vulns", "vulva", "vutty", "vying", "waacs", "wacke", "wacko", "wacks", "wacky", "wadds", "waddy", "waded", "wader", "wades", "wadge", "wadis", "wadts", "wafer", "waffs", "wafts", "waged", "wager", "wages", "wagga", "wagon", "wagyu", "wahoo", "waide", "waifs", "waift", "wails", "wains", "wairs", "waist", "waite", "waits", "waive", "wakas", "waked", "waken", "waker", "wakes", "wakfs", "waldo", "walds", "waled", "waler", "wales", "walie", "walis", "walks", "walla", "walls", "wally", "walty", "waltz", "wamed", "wames", "wamus", "wands", "waned", "wanes", "waney", "wangs", "wang ",  "wanks", "wanky", "wanle", "wanly", "wanna", "wants", "wanty", "wanze", "waqfs", "warbs", "warby", "wards", "ware ", "wared", "wares", "warez", "warks", "warms", "warns", "warps", "warre", "warst", "warts", "warty", "wases", "washy", "wasms", "wasps", "waspy", "waste", "wasts", "watap", "watch", "water", "watts", "wauff", "waugh", "wauks", "waulk", "wauls", "waurs", "waved", "waver", "waves", "wavey", "wawas", "wawes", "wawls", "waxed", "waxen", "waxer", "waxes", "wayed", "wazir", "wazoo", "weald", "weals", "weamb", "weans", "wears", "weary", "weave", "webby", "weber", "wecht", "wedel", "wedge", "wedgy", "weeds", "weedy", "weeke", "weeks", "weels", "weems", "weens", "weeny", "weeps", "weepy", "weest", "weete", "weets", "wefte", "wefts", "weids", "weigh", "weils", "weird", "weirs", "weise", "weize", "wekas", "welch", "welds", "welke", "welks", "welkt", "wells", "welly", "welsh", "welts", "wembs", "wench", "wends", "wenge", "wenny", "wents", "weros", "wersh", "wests", "wetas", "wetly", "wexed", "wexes", "whack", "whale", "whamo", "whams", "whang", "whaps", "whare", "wharf", "whata", "whats", "whaup", "whaur", "wheal", "whear", "wheat", "wheel", "wheen", "wheep", "wheft", "whelk", "whelm", "whelp", "whens", "where", "whets", "whews", "wheys", "which", "whids", "whiff", "whift", "whigs", "while", "whilk", "whims", "whine", "whins", "whiny", "whios", "whips", "whipt", "whirl", "whirr", "whirs", "whish", "whisk", "whiss", "whist", "white", "whits", "whity", "whizz", "whole", "whomp", "whoof", "whoop", "whoot", "whops", "whore", "whorl", "whort", "whose", "whoso", "whows", "whump", "whups", "whyda", "wicca", "wicks", "wicky", "widdy", "widen", "wider", "wides", "widow", "width", "wield", "wiels", "wifed", "wifes", "wifey", "wifie", "wifty", "wigan", "wigga", "wiggy", "wight", "wikis", "wilco", "wilds", "wiled", "wiles", "wilga", "wilis", "wilja", "will ", "wills", "willy", "wilts", "wimps", "wimpy", "wince", "winch", "winds", "windy", "wined", "wines", "winey", "winge", "wings", "wingy", "winks", "winna", "winns", "winos", "winze", "wiped", "wiper", "wipes", "wired", "wirer", "wires", "wirra", "wised", "wiser", "wises", "wisha", "wisht", "wisps", "wispy", "wists", "witan", "witch", "wited", "wites", "withe", "withs", "withy", "witty", "wived", "wiver", "wives", "wizen", "wizes", "woads", "woald", "wocks", "wodge", "woful", "wojus", "woken", "woker", "wokka", "wolds", "wolfs", "wolly", "wolve", "woman", "wombs", "womby", "women", "womyn", "wonga", "wongi", "wonks", "wonky", "wonts", "woods", "woody", "wooed", "wooer", "woofs", "woofy", "woold", "wools", "wooly", "woons", "woops", "woopy", "woose", "woosh", "wootz", "woozy", "words", "wordy", "works", "world", "worms", "wormy", "worry", "worse", "worst", "worth", "worts", "would", "wound", "woven", "wowed", "wowee", "woxen", "wrack", "wrang", "wraps", "wrapt", "wrast", "wrate", "wrath", "wrawl", "wreak", "wreck", "wrens", "wrest", "wrick", "wried", "wrier", "wries", "wring", "wrist", "write", "writs", "wroke", "wrong", "wroot", "wrote", "wroth", "wrung", "wryer", "wryly", "wuddy", "wudus", "wulls", "wurst", "wuses", "wushu", "wussy", "wuxia", "wyled", "wyles", "wynds", "wynns", "wyted", "wytes", "xebec", "xenia", "xenic", "xenon", "xeric", "xerox", "xerus", "xoana", "xrays", "xylan", "xylem", "xylic", "xylol", "xylyl", "xysti", "xysts", "yaars", "yabas", "yabba", "yabby", "yacca", "yacht", "yacka", "yacks", "yaffs", "yager", "yages", "yagis", "yahoo", "yaird", "yakka", "yakow", "yales", "yamen", "yampy", "yamun", "yangs", "yanks", "yapok", "yapon", "yapps", "yappy", "yarak", "yarco", "yards", "yarer", "yarfa", "yarks", "yarns", "yarrs", "yarta", "yarto", "yates", "yauds", "yauld", "yaups", "yawed", "yawey", "yawls", "yawns", "yawny", "yawps", "ybore", "yclad", "ycled", "ycond", "ydrad", "ydred", "yeads", "yeahs", "yealm", "yeans", "yeard", "yearn", "years", "yeast", "yecch", "yechs", "yechy", "yedes", "yeeds", "yeesh", "yeggs", "yelks", "yells", "yelms", "yelps", "yelts", "yenta", "yente", "yerba", "yerds", "yerks", "yeses", "yesks", "yests", "yesty", "yetis", "yetts", "yeuks", "yeuky", "yeven", "yeves", "yewen", "yexed", "yexes", "yfere", "yield", "yiked", "yikes", "yills", "yince", "yipes", "yippy", "yirds", "yirks", "yirrs", "yirth", "yites", "yitie", "ylems", "ylike", "ylkes", "ymolt", "ympes", "yobbo", "yobby", "yocks", "yodel", "yodhs", "yodle", "yogas", "yogee", "yoghs", "yogic", "yogin", "yogis", "yoick", "yojan", "yoked", "yokel", "yoker", "yokes", "yokul", "yolks", "yolky", "yomim", "yomps", "yonic", "yonis", "yonks", "yoofs", "yoops", "yores", "yorks", "yorps", "youks", "young", "yourn", "yours", "yourt", "youse", "youth", "yowed", "yowes", "yowie", "yowls", "yowza", "yrapt", "yrent", "yrivd", "yrneh", "ysame", "ytost", "yuans", "yucas", "yucca", "yucch", "yucko", "yucks", "yucky", "yufts", "yugas", "yuked", "yukes", "yukky", "yukos", "yulan", "yules", "yummo", "yummy", "yumps", "yupon", "yuppy", "yurta", "yurts", "yuzus", "zabra", "zacks", "zaida", "zaidy", "zaire", "zakat", "zaman", "zambo", "zamia", "zanja", "zante", "zanza", "zanze", "zappy", "zarfs", "zaris", "zatis", "zawa ", "zaxes", "zayin", "zazen", "zeals", "zebec", "zebra", "zebub", "zebus", "zedas", "zeins", "zendo", "zerda", "zerks", "zeros", "zests", "zesty", "zetas", "zexes", "zezes", "zhomo", "zibet", "ziffs", "zigan", "zilas", "zilch", "zilla", "zills", "zimbi", "zimbs", "zinco", "zincs", "zincy", "zineb", "zines", "zings", "zingy", "zinke", "zinky", "zippo", "zippy", "ziram", "zitis", "zizel", "zizit", "zlote", "zloty", "zoaea", "zobos", "zobus", "zocco", "zoeae", "zoeal", "zoeas", "zoism", "zoist", "zombi", "zonae", "zonal", "zonda", "zoned", "zoner", "zones", "zonks", "zooea", "zooey", "zooid", "zooks", "zooms", "zoons", "zooty", "zoppa", "zoppo", "zoril", "zoris", "zorro", "zouks", "zowee", "zowie", "zulus", "zupan", "zupas", "zuppa", "zurfs", "zuzim", "zygal", "zygon", "zymes", "zymic"],
		Ia = "present",
		Ma = "correct",
		Oa = "absent";
	var Ra = {
		unknown: 0,
		absent: 1,
		present: 2,
		correct: 3
	};

	function Pa(e, a) {
		var s = {};
		return e.forEach((function(e, t) {
			if (a[t])
				for (var o = 0; o < e.length; o++) {
					var n = e[o],
						r = a[t][o],
						i = s[n] || "unknown";
					Ra[r] > Ra[i] && (s[n] = r)
				}
		})), s
	}

	function $a(e) {
		var a = ["th", "st", "nd", "rd"],
			s = e % 100;
		return e + (a[(s - 20) % 10] || a[s] || a[0])
	}
	var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);

	function Na(e, a) {
		var s = new Date(e),
			t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
		return Math.round(t / 864e5)
	}

	function Da(e) {
		var a, s = Ga(e);
		return a = s % La.length, La[a]
	}

	function Ga(e) {
		return Na(Ha, e)
	}
	var Ba = "abcdefghijklmnopqrstuvwxyz",
		Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

	function Wa(e) {
		for (var a = "", s = 0; s < e.length; s++) {
			var t = Ba.indexOf(e[s]);
			a += t >= 0 ? Fa[t] : "_"
		}
		return a
	}
	var Ya = "statistics",
		Ja = "fail",
		Ua = {
			currentStreak: 0,
			maxStreak: 0,
			guesses: n({
				1: 0,
				2: 0,
				3: 0,
				4: 0,
				5: 0,
				6: 0
			}, Ja, 0),
			winPercentage: 0,
			gamesPlayed: 0,
			gamesWon: 0,
			averageGuesses: 0
		};

	function Xa() {
		var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
		return JSON.parse(e)
	}

	function Va(e) {
		var a = e.isWin,
			s = e.isStreak,
			t = e.numGuesses,
			o = Xa();
		a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
				var s = y(a, 2),
					t = s[0],
					o = s[1];
				return t !== Ja ? e += t * o : e
			}), 0) / o.gamesWon),
			function(e) {
				window.localStorage.setItem(Ya, JSON.stringify(e))
			}(o)
	}
	var Ka = document.createElement("template");
	Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         PODLE 2.1\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
	var Qa = document.createElement("template");
	Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
	var Za = "IN_PROGRESS",
		es = "WIN",
		as = "FAIL",
		ss = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"],
		ts = function(e) {
			r(t, e);
			var a = h(t);

			function t() {
				var e;
				s(this, t), n(p(e = a.call(this)), "tileIndex", 0), n(p(e), "rowIndex", 0), n(p(e), "solution", void 0), n(p(e), "boardState", void 0), n(p(e), "evaluations", void 0), n(p(e), "canInput", !0), n(p(e), "gameStatus", Za), n(p(e), "letterEvaluations", {}), n(p(e), "$board", void 0), n(p(e), "$keyboard", void 0), n(p(e), "$game", void 0), n(p(e), "today", void 0), n(p(e), "lastPlayedTs", void 0), n(p(e), "lastCompletedTs", void 0), n(p(e), "hardMode", void 0), n(p(e), "dayOffset", void 0), e.attachShadow({
					mode: "open"
				}), e.today = new Date;
				var o = za();
				return e.lastPlayedTs = o.lastPlayedTs, !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Da(e.today), e.dayOffset = Ga(e.today), e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.restoringFromLocalStorage = !1, ja({
					rowIndex: e.rowIndex,
					boardState: e.boardState,
					evaluations: e.evaluations,
					solution: e.solution,
					gameStatus: e.gameStatus
				}), Ca("event", "level_start", {
					level_name: Wa(e.solution)
				})) : (e.boardState = o.boardState, e.evaluations = o.evaluations, e.rowIndex = o.rowIndex, e.solution = o.solution, e.dayOffset = Ga(e.today), e.letterEvaluations = Pa(e.boardState, e.evaluations), e.gameStatus = o.gameStatus, e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.gameStatus !== Za && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
			}
			return o(t, [{
				key: "evaluateRow",
				value: function() {
					if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
						var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
							s = this.boardState[this.rowIndex];
						if (e = s, !Ta.includes(e) && !La.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Not in word list");
						if (this.hardMode) {
							var t = function(e, a, s) {
									if (!e || !a || !s) return {
										validGuess: !0
									};
									for (var t = 0; t < s.length; t++)
										if (s[t] === Ma && e[t] !== a[t]) return {
											validGuess: !1,
											errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase())
										};
									for (var o = {}, n = 0; n < s.length; n++)[Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
									var r = e.split("").reduce((function(e, a) {
										return e[a] ? e[a] += 1 : e[a] = 1, e
									}), {});
									for (var i in o)
										if ((r[i] || 0) < o[i]) return {
											validGuess: !1,
											errorMessage: "Guess must contain ".concat(i.toUpperCase())
										};
									return {
										validGuess: !0
									}
								}(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
								o = t.validGuess,
								n = t.errorMessage;
							if (!o) return a.setAttribute("invalid", ""), void this.addToast(n || "Not valid in hard mode")
						}
						var r = function(e, a) {
							for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++) e[n] === a[n] && o[n] && (s[n] = Ma, t[n] = !1, o[n] = !1);
							for (var r = 0; r < e.length; r++) {
								var i = e[r];
								if (t[r])
									for (var l = 0; l < a.length; l++) {
										var d = a[l];
										if (o[l] && i === d) {
											s[r] = Ia, o[l] = !1;
											break
										}
									}
							}
							return s
						}(s, this.solution);
						this.evaluations[this.rowIndex] = r, this.letterEvaluations = Pa(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
						var i = this.rowIndex >= 6,
							l = r.every((function(e) {
								return "correct" === e
							}));
						if (i || l) Va({
							isWin: l,
							isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
							numGuesses: this.rowIndex
						}), ja({
							lastCompletedTs: Date.now()
						}), this.gameStatus = l ? es : as, Ca("event", "level_end", {
							level_name: Wa(this.solution),
							num_guesses: this.rowIndex,
							success: l
						});
						this.tileIndex = 0, this.canInput = !1, ja({
							rowIndex: this.rowIndex,
							boardState: this.boardState,
							evaluations: this.evaluations,
							solution: this.solution,
							gameStatus: this.gameStatus,
							lastPlayedTs: Date.now()
						})
					}
				}
			}, {
				key: "addLetter",
				value: function(e) {
					this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
				}
			}, {
				key: "removeLetter",
				value: function() {
					if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
						this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
						var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
						this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
					}
				}
			}, {
				key: "submitGuess",
				value: function() {
					if (this.gameStatus === Za && this.canInput) {
						this.addLetter(" ");
						this.addLetter(" ");
						this.addLetter(" ");
						this.addLetter(" ");
						if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
						this.evaluateRow()
					}
				}
			}, {
				key: "addToast",
				value: function(e, a) {
					var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						t = document.createElement("game-toast");
					t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
				}
			}, {
				key: "sizeBoard",
				value: function() {
					var e = this.shadowRoot.querySelector("#board-container"),
						a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
						s = 6 * Math.floor(a / 5);
					this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
				}
			}, {
				key: "showStatsModal",
				value: function() {
					var e = this.$game.querySelector("game-modal"),
						a = document.createElement("game-stats");
					this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
				}
			}, {
				key: "showHelpModal",
				value: function() {
					var e = this.$game.querySelector("game-modal");
					e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
				}
			}, {
				key: "connectedCallback",
				value: function() {
					var e = this;
					this.shadowRoot.appendChild(Ka.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function() {
						return e.showHelpModal()
					}), 100);
					for (var a = 0; a < 6; a++) {
						var s = document.createElement("game-row");
						s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s)
					}
					this.$game.addEventListener("game-key-press", (function(a) {
						var s = a.detail.key;
						"←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
					})), this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
						e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 6 && (e.canInput = !0);
						var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
						(a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)), e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function() {
							e.showStatsModal()
						}), 2500))), e.restoringFromLocalStorage = !1)
					})), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
						var s = a.detail,
							t = s.name,
							o = s.checked,
							n = s.disabled;
						switch (t) {
							case "hard-mode":
								return void(n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o, ja({
									hardMode: o
								})))
						}
					})), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(a) {
						var s = e.$game.querySelector("game-page"),
							t = document.createTextNode("Settings");
						s.appendChild(t);
						var o = document.createElement("game-settings");
						o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
					})), this.shadowRoot.getElementById("help-button").addEventListener("click", (function(a) {
						var s = e.$game.querySelector("game-page"),
							t = document.createTextNode("How to play");
						s.appendChild(t);
						var o = document.createElement("game-help");
						o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "")
					})), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(a) {
						e.showStatsModal()
					})), window.addEventListener("resize", this.sizeBoard.bind(this))
				}
			}, {
				key: "disconnectedCallback",
				value: function() {}
			}, {
				key: "debugTools",
				value: function() {
					var e = this;
					this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
						e.addToast("hello world")
					})), this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
						var s = e.$game.querySelector("game-modal");
						s.textContent = "hello plz", s.setAttribute("open", "")
					})), this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
						e.evaluateRow()
					})), this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
						e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
					})), this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
						var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
						"" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
					}))
				}
			}]), t
		}(c(HTMLElement));
	customElements.define("game-app", ts);
	var os = document.createElement("template");
	os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
	var ns = function(e) {
		r(t, e);
		var a = h(t);

		function t() {
			var e;
			return s(this, t), (e = a.call(this)).attachShadow({
				mode: "open"
			}), e
		}
		return o(t, [{
			key: "connectedCallback",
			value: function() {
				var e = this;
				this.shadowRoot.appendChild(os.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
					e.shadowRoot.querySelector(".content").classList.add("closing")
				})), this.shadowRoot.addEventListener("animationend", (function(a) {
					"SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
				}))
			}
		}]), t
	}(c(HTMLElement));
	customElements.define("game-modal", ns);
	var rs = document.createElement("template");
	rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
	var is = document.createElement("template");
	is.innerHTML = "\n  <button>key</button>\n";
	var ls = document.createElement("template");
	ls.innerHTML = '\n  <div class="spacer"></div>\n';
	var ds = [
			["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
			["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
			["↵", "z", "x", "c", "v", "b", "n", "m", "←"]
		],
		us = function(e) {
			r(t, e);
			var a = h(t);

			function t() {
				var e;
				return s(this, t), n(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
					mode: "open"
				}), e
			}
			return o(t, [{
				key: "letterEvaluations",
				set: function(e) {
					this._letterEvaluations = e, this._render()
				}
			}, {
				key: "dispatchKeyPressEvent",
				value: function(e) {
					this.dispatchEvent(new CustomEvent("game-key-press", {
						bubbles: !0,
						composed: !0,
						detail: {
							key: e
						}
					}))
				}
			}, {
				key: "connectedCallback",
				value: function() {
					var e = this;
					this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function(a) {
						var s = a.target.closest("button");
						s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
					})), window.addEventListener("keydown", (function(a) {
						if (!0 !== a.repeat) {
							var s = a.key,
								t = a.metaKey,
								o = a.ctrlKey;
							t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
						}
					})), this.$keyboard.addEventListener("transitionend", (function(a) {
						var s = a.target.closest("button");
						s && e.$keyboard.contains(s) && s.classList.remove("fade")
					})), ds.forEach((function(a) {
						var s = document.createElement("div");
						s.classList.add("row"), a.forEach((function(e) {
							var a;
							if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
								if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
									var t = document.createElement("game-icon");
									t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
								}
								"↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
							} else(a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
							s.appendChild(a)
						})), e.$keyboard.appendChild(s)
					})), this._render()
				}
			}, {
				key: "_render",
				value: function() {
					for (var e in this._letterEvaluations) {
						if (e!=" "){
							var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
							a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
						}
					}
				}
			}]), t
		}(c(HTMLElement));
	/*! *****************************************************************************
	  Copyright (c) Microsoft Corporation.

	  Permission to use, copy, modify, and/or distribute this software for any
	  purpose with or without fee is hereby granted.

	  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	  PERFORMANCE OF THIS SOFTWARE.
	  ***************************************************************************** */
	function cs(e, a, s, t) {
		return new(s || (s = Promise))((function(o, n) {
			function r(e) {
				try {
					l(t.next(e))
				} catch (e) {
					n(e)
				}
			}

			function i(e) {
				try {
					l(t.throw(e))
				} catch (e) {
					n(e)
				}
			}

			function l(e) {
				var a;
				e.done ? o(e.value) : (a = e.value, a instanceof s ? a : new s((function(e) {
					e(a)
				}))).then(r, i)
			}
			l((t = t.apply(e, a || [])).next())
		}))
	}

	function ps(e, a) {
		var s, t, o, n, r = {
			label: 0,
			sent: function() {
				if (1 & o[0]) throw o[1];
				return o[1]
			},
			trys: [],
			ops: []
		};
		return n = {
			next: i(0),
			throw: i(1),
			return: i(2)
		}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
			return this
		}), n;

		function i(n) {
			return function(i) {
				return function(n) {
					if (s) throw new TypeError("Generator is already executing.");
					for (; r;) try {
						if (s = 1, t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done) return o;
						switch (t = 0, o && (n = [2 & n[0], o.value]), n[0]) {
							case 0:
							case 1:
								o = n;
								break;
							case 4:
								return r.label++, {
									value: n[1],
									done: !1
								};
							case 5:
								r.label++, t = n[1], n = [0];
								continue;
							case 7:
								n = r.ops.pop(), r.trys.pop();
								continue;
							default:
								if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
									r = 0;
									continue
								}
								if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
									r.label = n[1];
									break
								}
								if (6 === n[0] && r.label < o[1]) {
									r.label = o[1], o = n;
									break
								}
								if (o && r.label < o[2]) {
									r.label = o[2], r.ops.push(n);
									break
								}
								o[2] && r.ops.pop(), r.trys.pop();
								continue
						}
						n = a.call(e, r)
					} catch (e) {
						n = [6, e], t = 0
					} finally {
						s = o = 0
					}
					if (5 & n[0]) throw n[1];
					return {
						value: n[0] ? n[1] : void 0,
						done: !0
					}
				}([n, i])
			}
		}
	}
	customElements.define("game-keyboard", us),
		function() {
			(console.warn || console.log).apply(console, arguments)
		}.bind("[clipboard-polyfill]");
	var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator,
		fs = null == bs ? void 0 : bs.clipboard;
	null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs), null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
	var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
		vs = "undefined" == typeof window ? void 0 : window,
		ws = (null == vs || vs.ClipboardItem, vs);
	var xs = function() {
		this.success = !1
	};

	function zs(e, a, s) {
		for (var t in e.success = !0, a) {
			var o = a[t],
				n = s.clipboardData;
			n.setData(t, o), "text/plain" === t && n.getData(t) !== o && (e.success = !1)
		}
		s.preventDefault()
	}

	function js(e) {
		var a = new xs,
			s = zs.bind(this, a, e);
		document.addEventListener("copy", s);
		try {
			document.execCommand("copy")
		} finally {
			document.removeEventListener("copy", s)
		}
		return a.success
	}

	function Ss(e, a) {
		_s(e);
		var s = js(a);
		return qs(), s
	}

	function _s(e) {
		var a = document.getSelection();
		if (a) {
			var s = document.createRange();
			s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
		}
	}

	function qs() {
		var e = document.getSelection();
		e && e.removeAllRanges()
	}

	function Es(e) {
		return cs(this, void 0, void 0, (function() {
			var a;
			return ps(this, (function(s) {
				if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
					if (!a) throw new Error("No `text/plain` value was specified.");
					if (t = e["text/plain"], ws.clipboardData.setData("Text", t)) return [2, !0];
					throw new Error("Copying failed, possibly because the user rejected it.")
				}
				var t;
				return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function(e) {
					var a = document.createElement("div");
					a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
					var s = Ss(a, e);
					return document.body.removeChild(a), s
				}(e) || function(e) {
					var a = document.createElement("div");
					a.setAttribute("style", "-webkit-user-select: text !important");
					var s = a;
					a.attachShadow && (s = a.attachShadow({
						mode: "open"
					}));
					var t = document.createElement("span");
					t.innerText = e, s.appendChild(t), document.body.appendChild(a), _s(t);
					var o = document.execCommand("copy");
					return qs(), document.body.removeChild(a), o
				}(e["text/plain"]) ? [2, !0] : [2, !1]
			}))
		}))
	}

	function As(e, a, s) {
		try {
			t = navigator.userAgent || navigator.vendor || window.opera, !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function(e) {
				return cs(this, void 0, void 0, (function() {
					return ps(this, (function(a) {
						if (ks) return [2, ks(e)];
						if (!Es(function(e) {
								var a = {};
								return a["text/plain"] = e, a
							}(e))) throw new Error("writeText() failed");
						return [2]
					}))
				}))
			}(e.text).then(a, s) : navigator.share(e)
		} catch (e) {
			s()
		}
		var t
	}
	var Cs = document.createElement("template");
	Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
	var Ls = document.createElement("template");
	Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
	var Ts = document.createElement("template");
	Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
	var Is = document.createElement("template");
	Is.innerHTML = '\n  <div class="countdown">\n    <h1>Next PODLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
	var Ms = {
			currentStreak: "Current Streak",
			maxStreak: "Max Streak",
			winPercentage: "Win %",
			gamesPlayed: "Played",
			gamesWon: "Won",
			averageGuesses: "Av. Guesses"
		},
		Os = function(e) {
			r(t, e);
			var a = h(t);

			function t() {
				var e;
				return s(this, t), n(p(e = a.call(this)), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({
					mode: "open"
				}), e.stats = Xa(), e
			}
			return o(t, [{
				key: "connectedCallback",
				value: function() {
					var e = this;
					this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
					var a = this.shadowRoot.getElementById("statistics"),
						s = this.shadowRoot.getElementById("guess-distribution"),
						t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
					if (Object.values(this.stats.guesses).every((function(e) {
							return 0 === e
						}))) {
						var o = document.createElement("div");
						o.classList.add("no-data"), o.innerText = "No Data", s.appendChild(o)
					} else
						for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
							var r = n,
								i = this.stats.guesses[n],
								l = Ts.content.cloneNode(!0),
								d = Math.max(7, Math.round(i / t * 100));
							l.querySelector(".guess").textContent = r;
							var u = l.querySelector(".graph-bar");
							if (u.style.width = "".concat(d, "%"), "number" == typeof i) {
								l.querySelector(".num-guesses").textContent = i, i > 0 && u.classList.add("align-right");
								var c = parseInt(this.getAttribute("highlight-guess"), 10);
								c && n === c && u.classList.add("highlight")
							}
							s.appendChild(l)
						}
					if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
							var t = Ms[s],
								o = e.stats[s],
								n = Ls.content.cloneNode(!0);
							n.querySelector(".label").textContent = t, n.querySelector(".statistic").textContent = o, a.appendChild(n)
						})), this.gameApp.gameStatus !== Za) {
						var p = this.shadowRoot.querySelector(".footer"),
							m = Is.content.cloneNode(!0);
						p.appendChild(m), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
							a.preventDefault(), a.stopPropagation();
							As(function(e) {
								var a = e.evaluations,
									s = e.dayOffset,
									t = e.rowIndex,
									o = e.isHardMode,
									n = e.isWin,
									r = JSON.parse(window.localStorage.getItem(j)),
									i = JSON.parse(window.localStorage.getItem(S)),
									l = "Podle ".concat(s);
								l += " ".concat(n ? t : "X", "/").concat(6), o && (l += "*");
								var d = "";
								return a.forEach((function(e) {
									e && (e.forEach((function(e) {
										if (e) {
											var a = "";
											switch (e) {
												case Ma:
													a = function(e) {
														return e ? "🟧" : "🟪"
													}(i);
													break;
												case Ia:
													a = function(e) {
														return e ? "🟦" : "🟨"
													}(i);
													break;
												case Oa:
													a = function(e) {
														return e ? "⬛" : "⬛"
													}(r)
											}
											d += a
										}
									})), d += "\n")
								})), {
									text: "".concat(l, "\n\n").concat(d.trimEnd())
								}
							}({
								evaluations: e.gameApp.evaluations,
								dayOffset: e.gameApp.dayOffset,
								rowIndex: e.gameApp.rowIndex,
								isHardMode: e.gameApp.hardMode,
								isWin: e.gameApp.gameStatus === es
							}), (function() {
								e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
							}), (function() {
								e.gameApp.addToast("Share failed", 2e3, !0)
							}))
						}))
					}
				}
			}]), t
		}(c(HTMLElement));
	customElements.define("game-stats", Os);
	var Rs = document.createElement("template");
	Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
	var Ps = function(e) {
		r(t, e);
		var a = h(t);

		function t() {
			var e;
			return s(this, t), (e = a.call(this)).attachShadow({
				mode: "open"
			}), e
		}
		return o(t, [{
			key: "connectedCallback",
			value: function() {
				var e = this;
				this.shadowRoot.appendChild(Rs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
					a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
						bubbles: !0,
						composed: !0,
						detail: {
							name: e.getAttribute("name"),
							checked: e.hasAttribute("checked"),
							disabled: e.hasAttribute("disabled")
						}
					}))
				}))
			}
		}], [{
			key: "observedAttributes",
			get: function() {
				return ["checked"]
			}
		}]), t
	}(c(HTMLElement));
	customElements.define("game-switch", Ps);
	var $s = document.createElement("template");
	$s.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>There\'s a new pod in the Brad&Williverse so there\'s a new <strong>PODLE</strong>!</p>\n      <p><strong>Guesses are no longer limited</strong> and there are a lot more solutions.</p>\n <p>Many solutions are less than 5 letters such as <strong>Brad</strong>, <strong>And</strong>, <strong>Will</strong>, <strong>Made</strong>, <strong>A</strong>, <strong>Tech</strong>, <strong>Foss</strong>, and <strong>POD</strong> (get the joke?)</p>\n <p>Hit the enter button to submit.</p>\n     <p>check out the new <strong>FOSS theme</strong> mode!</p>      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n      <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="b" evaluation="correct" reveal></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="d"></game-tile>\n            <game-tile letter=" "></game-tile>\n          </div>\n          <p>The letter <strong>B</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w"></game-tile>\n            <game-tile letter="i" evaluation="present" reveal></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter=" "></game-tile>\n          </div>\n          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="f" evaluation="absent" reveal></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="s"></game-tile>\n            <game-tile letter="s"></game-tile>\n            <game-tile letter=" "></game-tile>\n          </div>\n          <p>The letter <strong>F</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new PODLE will be available each day!<strong></p>\n    </div>\n  </section>\n';
	var Hs = function(e) {
		r(t, e);
		var a = h(t);

		function t() {
			var e;
			return s(this, t), (e = a.call(this)).attachShadow({
				mode: "open"
			}), e
		}
		return o(t, [{
			key: "connectedCallback",
			value: function() {
				this.shadowRoot.appendChild($s.content.cloneNode(!0))
			}
		}]), t
	}(c(HTMLElement));
	customElements.define("game-help", Hs);
	var Ns = document.createElement("template");
	Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
	var Ds = function(e) {
		r(t, e);
		var a = h(t);

		function t() {
			var e;
			return s(this, t), (e = a.call(this)).attachShadow({
				mode: "open"
			}), e
		}
		return o(t, [{
			key: "connectedCallback",
			value: function() {
				var e = this;
				this.shadowRoot.appendChild(Ns.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
					e.shadowRoot.querySelector(".overlay").classList.add("closing")
				})), this.shadowRoot.addEventListener("animationend", (function(a) {
					"SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
						e.removeChild(a)
					})), e.removeAttribute("open"))
				}))
			}
		}]), t
	}(c(HTMLElement));
	customElements.define("game-page", Ds);
	var Gs = document.createElement("template");
	Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
	var Bs = {
			help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
			settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
			backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
			close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
			share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
			statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
		},
		Fs = function(e) {
			r(t, e);
			var a = h(t);

			function t() {
				var e;
				return s(this, t), (e = a.call(this)).attachShadow({
					mode: "open"
				}), e
			}
			return o(t, [{
				key: "connectedCallback",
				value: function() {
					this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
					var e = this.getAttribute("icon");
					this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
				}
			}]), t
		}(c(HTMLElement));
	customElements.define("game-icon", Fs);
	var Ws = document.createElement("template");
	Ws.innerHTML = '\n  <div id="timer"></div>\n';
	var Ys = 6e4,
		Js = 36e5,
		Us = function(e) {
			r(t, e);
			var a = h(t);

			function t() {
				var e;
				s(this, t), n(p(e = a.call(this)), "targetEpochMS", void 0), n(p(e), "intervalId", void 0), n(p(e), "$timer", void 0), e.attachShadow({
					mode: "open"
				});
				var o = new Date;
				return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
			}
			return o(t, [{
				key: "padDigit",
				value: function(e) {
					return e.toString().padStart(2, "0")
				}
			}, {
				key: "updateTimer",
				value: function() {
					var e, a = (new Date).getTime(),
						s = Math.floor(this.targetEpochMS - a);
					if (s <= 0) e = "00:00:00";
					else {
						var t = Math.floor(s % 864e5 / Js),
							o = Math.floor(s % Js / Ys),
							n = Math.floor(s % Ys / 1e3);
						e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
					}
					this.$timer.textContent = e
				}
			}, {
				key: "connectedCallback",
				value: function() {
					var e = this;
					this.shadowRoot.appendChild(Ws.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() {
						e.updateTimer()
					}), 200)
				}
			}, {
				key: "disconnectedCallback",
				value: function() {
					clearInterval(this.intervalId)
				}
			}]), t
		}(c(HTMLElement));
	return customElements.define("countdown-timer", Us), e.CountdownTimer = Us, e.GameApp = ts, e.GameHelp = Hs, e.GameIcon = Fs, e.GameKeyboard = us, e.GameModal = ns, e.GamePage = Ds, e.GameRow = x, e.GameSettings = _a, e.GameStats = Os, e.GameSwitch = Ps, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Aa, Object.defineProperty(e, "__esModule", {
		value: !0
	}), e
}({});