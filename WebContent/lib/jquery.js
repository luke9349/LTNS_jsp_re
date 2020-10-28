/// *!
// * jQuery 자바 스크립트 라이브러리 v3.5.1
// * https://jquery.com/
// *
// * Sizzle.js 포함
// * https://sizzlejs.com/
// *
// * 저작권 JS 재단 및 기타 기여자
// * MIT 라이선스로 출시
// * https://jquery.org/license
// *
// * 날짜 : 2020-05-04T22 : 49Z
// * /
(function (global, factory) {

	"엄격한 사용";

	if (typeof module === "object"&& typeof module.exports === "object") {

		// 적절한`window`가있는 CommonJS 및 CommonJS 유사 환경
		// 존재하면 팩토리를 실행하고 jQuery를 가져옵니다.
		//`document`가있는`window`가없는 환경
		// (예 : Node.js), 팩토리를 module.exports로 노출합니다.
		// 이것은 실제`창`을 생성 할 필요성을 강조합니다.
		// 예 var jQuery = require ( "jquery") (window);
		// 자세한 내용은 티켓 # 14549를 참조하십시오.
		module.exports = global.document?
			공장 (global, true) :
			function (w) {
				if (! w.document) {
					throw new Error ( "jQuery에는 문서가있는 창이 필요합니다");
				}
				반환 공장 (w);
			};
	} else {
		공장 (글로벌);
	}

// 창이 아직 정의되지 않은 경우 전달
}) (typeof window! == "undefined"? window : this, function (window, noGlobal) {

// Edge <= 12-13 +, Firefox <= 18-45 +, IE 10-11, Safari 5.1-9+, iOS 6-9.1
// 엄격하지 않은 코드 (예 : ASP.NET 4.5)가 엄격 모드에 액세스 할 때 예외 발생
// arguments.callee.caller (trac-13335). 하지만 jQuery 3.0 (2016)부터 엄격 모드가 일반적이어야합니다.
// 이러한 모든 시도가 try 블록에서 보호되기에 충분합니다.
"엄격한 사용";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat? 함수 (배열) {
	return arr.flat.call (array);
} : 함수 (배열) {
	return arr.concat.apply ([], array);
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (Object);

var support = {};

var isFunction = function isFunction (obj) {

      // 지원 : Chrome <= 57, Firefox <= 52
      // 일부 브라우저에서 typeof는 HTML <object> 요소에 대해 "함수"를 반환합니다.
      // (즉,`typeof document.createElement ( "object") === "function"`).
      // * 모든 * DOM 노드를 함수로 분류하고 싶지 않습니다.
      return typeof obj === "함수"&& typeof obj.nodeType! == "숫자";
  };


var isWindow = function isWindow (obj) {
		return obj! = null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		유형 : true,
		src : 참,
		nonce : 참,
		noModule : true
	};

	function DOMEval (코드, 노드, 문서) {
		doc = doc || 문서;

		var i, val,
			script = doc.createElement ( "script");

		script.text = 코드;
		if (노드) {
			for (나는 preservedScriptAttributes) {

				// 지원 : Firefox 64+, Edge 18+
				// 일부 브라우저는 스크립트에서 "nonce"속성을 지원하지 않습니다.
				// 반면에`getAttribute`를 사용하는 것만으로는 충분하지 않습니다.
				//`nonce` 속성은 항상 빈 문자열로 재설정됩니다.
				// 브라우징 컨텍스트가 연결됩니다.
				// https://github.com/whatwg/html/issues/2369 참조
				// https://html.spec.whatwg.org/#nonce-attributes 참조
				//`node.getAttribute` 검사가 추가되었습니다.
				//`jQuery.globalEval`을 사용하여 nonce 포함 노드를 가짜로 만들 수 있습니다.
				// 객체를 통해.
				val = node [i] || node.getAttribute && node.getAttribute (i);
				if (val) {
					script.setAttribute (i, val);
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


function toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// 지원 : Android <= 2.3 전용 (기능적 RegExp)
	반환 typeof obj === "object"|| typeof obj === "기능"?
		class2type [toString.call (obj)] || "객체":
		typeof obj;
}
/ * 글로벌 심볼 * /
// .eslintrc.json에서이 전역을 정의하면 전역을 사용할 위험이 있습니다.
// 다른 곳에서 보호되지 않는 경우이 모듈에 대해서만 전역을 정의하는 것이 더 안전 해 보입니다.



var
	버전 = "3.5.1",

	// jQuery의 로컬 사본 정의
	jQuery = function (선택자, 컨텍스트) {

		// jQuery 객체는 실제로 '향상된'초기화 생성자입니다.
		// jQuery가 호출되면 초기화 필요 (포함되지 않은 경우 오류가 발생하도록 허용)
		return new jQuery.fn.init (selector, context);
	};

jQuery.fn = jQuery.prototype = {

	// 현재 사용중인 jQuery 버전
	jquery : 버전,

	생성자 : jQuery,

	// jQuery 객체의 기본 길이는 0입니다.
	길이 : 0,

	toArray : function () {
		return slice.call (this);
	},

	// 일치하는 요소 집합에서 N 번째 요소를 가져옵니다. 또는
	// 전체 일치 요소 집합을 깨끗한 배열로 가져옵니다.
	get : function (num) {

		// 깨끗한 배열의 모든 요소를 ​​반환
		if (num == null) {
			return slice.call (this);
		}

		// 집합에서 하나의 요소 만 반환
		return num <0? this [num + this.length] : this [num];
	},

	// 요소 배열을 가져와 스택에 푸시
	// (새로 일치하는 요소 집합 반환)
	pushStack : function (elems) {

		// 새로운 jQuery 일치 요소 집합을 만듭니다.
		var ret = jQuery.merge (this.constructor (), elems);

		// 스택에 이전 객체를 추가합니다 (참조로).
		ret.prevObject = 이것;

		// 새로 형성된 요소 집합을 반환합니다.
		반환 ret;
	},

	// 일치하는 집합의 모든 요소에 대해 콜백을 실행합니다.
	각각 : function (callback) {
		return jQuery.each (this, callback);
	},

	지도 : function (callback) {
		return this.pushStack (jQuery.map (this, function (elem, i) {
			return callback.call (elem, i, elem);
		}));
	},

	슬라이스 : function () {
		return this.pushStack (slice.apply (this, arguments));
	},

	첫 번째 : function () {
		return this.eq (0);
	},

	last : function () {
		return this.eq (-1);
	},

	짝수 : function () {
		return this.pushStack (jQuery.grep (this, function (_elem, i) {
			반환 (i + 1) % 2;
		}));
	},

	홀수 : function () {
		return this.pushStack (jQuery.grep (this, function (_elem, i) {
			반환 i % 2;
		}));
	},

	eq : function (i) {
		var len = this.length,
			j = + i + (i <0? len : 0);
		return this.pushStack (j> = 0 && j <len? [this [j]] : []);
	},

	끝 : function () {
		return this.prevObject || this.constructor ();
	},

	// 내부 전용입니다.
	// jQuery 메소드가 아닌 Array의 메소드처럼 동작합니다.
	밀어 밀어,
	정렬 : arr.sort,
	스플 라이스 : arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	var 옵션, 이름, src, copy, copyIsArray, clone,
		대상 = 인수 [0] || {},
		나는 = 1,
		길이 = arguments.length,
		깊은 = 거짓;

	// 전체 복사 상황 처리
	if (typeof target === "boolean") {
		깊이 = 목표;

		// 부울과 대상 건너 뛰기
		대상 = 인수 [i] || {};
		i ++;
	}

	// 대상이 문자열 또는 무언가 일 때 케이스 처리 (딥 카피에서 가능)
	if (typeof target! == "object"&&! isFunction (target)) {
		목표 = {};
	}

	// 인수가 하나만 전달되면 jQuery 자체 확장
	if (i === 길이) {
		목표 = 이것;
		나는--;
	}

	for (; i <길이; i ++) {

		// null이 아닌 / 정의되지 않은 값만 처리
		if ((옵션 = arguments [i])! = null) {

			// 기본 개체 확장
			for (옵션의 이름) {
				복사 = 옵션 [이름];

				// Object.prototype 오염 방지
				// 끝없는 루프 방지
				if (name === "__proto__"|| target === copy) {
					계속하다;
				}

				// 일반 객체 또는 배열을 병합하는 경우 재귀
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copy)))) {
					src = 대상 [이름];

					// 소스 값에 적절한 유형을 확인합니다.
					if (copyIsArray &&! Array.isArray (src)) {
						클론 = [];
					} else if (! copyIsArray &&! jQuery.isPlainObject (src)) {
						클론 = {};
					} else {
						클론 = src;
					}
					copyIsArray = 거짓;

					// 원래 개체를 이동하지 않고 복제합니다.
					target [이름] = jQuery.extend (deep, clone, copy);

				// 정의되지 않은 값을 가져 오지 마십시오.
				} else if (copy! == undefined) {
					대상 [이름] = 사본;
				}
			}
		}
	}

	// 수정 된 객체 반환
	반환 대상;
};

jQuery.extend ({

	// 페이지의 각 jQuery 사본에 대해 고유함
	expando : "jQuery"+ (version + Math.random ()) .replace (/ \ D / g, ""),

	// 준비 모듈없이 jQuery가 준비되었다고 가정합니다.
	isReady : true,

	오류 : function (msg) {
		새로운 오류 (msg);
	},

	noop : function () {},

	isPlainObject : function (obj) {
		var proto, Ctor;

		// 명백한 네거티브 감지
		// jQuery.type 대신 toString을 사용하여 호스트 객체 포착
		if (! obj || toString.call (obj)! == "[object Object]") {
			거짓 반환;
		}

		proto = getProto (obj);

		// 프로토 타입이없는 객체 (예 : ʻObject.create (null)`)는 단순합니다.
		if (! proto) {
			true를 반환하십시오.
		}

		// 프로토 타입이있는 객체는 전역 객체 함수에 의해 생성 된 경우 일반입니다.
		Ctor = hasOwn.call (proto, "constructor") && proto.constructor;
		반환 typeof Ctor === "함수"&& fnToString.call (Ctor) === ObjectFunctionString;
	},

	isEmptyObject : function (obj) {
		var 이름;

		for (obj의 이름) {
			거짓 반환;
		}
		true를 반환하십시오.
	},

	// 제공된 컨텍스트에서 스크립트를 평가합니다. 글로벌로 폴백
	// 지정되지 않은 경우.
	globalEval : function (code, options, doc) {
		DOMEval (코드, {nonce : 옵션 && options.nonce}, doc);
	},

	각각 : function (obj, callback) {
		var 길이, i = 0;

		if (isArrayLike (obj)) {
			길이 = obj.length;
			for (; i <길이; i ++) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					단절;
				}
			}
		} else {
			for (i in obj) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					단절;
				}
			}
		}

		반환 obj;
	},

	// 결과는 내부 용입니다.
	makeArray : function (arr, results) {
		var ret = 결과 || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "문자열"?
					[arr] : arr
				);
			} else {
				push.call (ret, arr);
			}
		}

		반환 ret;
	},

	inArray : function (elem, arr, i) {
		return arr == null? -1 : indexOf.call (arr, elem, i);
	},

	// 지원 : Android <= 4.0 전용, PhantomJS 1 전용
	// push.apply (_, arraylike)는 고대 WebKit에서 발생합니다.
	merge : function (first, second) {
		var len = + second.length,
			j = 0,
			i = 첫 번째 길이;

		for (; j <len; j ++) {
			첫 번째 [i ++] = 두 번째 [j];
		}

		first.length = i;

		먼저 반환;
	},

	grep : function (elems, callback, invert) {
		var callbackInverse,
			일치 = [],
			나는 = 0,
			길이 = elems.length,
			callbackExpect =! invert;

		// 배열을 통해 항목 만 저장합니다.
		// 유효성 검사 기능을 전달합니다.
		for (; i <길이; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				match.push (elems [i]);
			}
		}

		반환 경기;
	},

	// arg는 내부 전용입니다.
	지도 : function (elems, callback, arg) {
		var 길이, 값,
			나는 = 0,
			ret = [];

		// 배열을 통해 각 항목을 새 값으로 변환합니다.
		if (isArrayLike (elems)) {
			길이 = elems.length;
			for (; i <길이; i ++) {
				값 = callback (elems [i], i, arg);

				if (value! = null) {
					ret.push (값);
				}
			}

		// 객체의 모든 키를 통과합니다.
		} else {
			for (i in elems) {
				값 = callback (elems [i], i, arg);

				if (value! = null) {
					ret.push (값);
				}
			}
		}

		// 중첩 된 배열을 평면화
		return flat (ret);
	},

	// 개체에 대한 전역 GUID 카운터
	guid : 1,

	// jQuery.support는 Core에서 사용되지 않지만 다른 프로젝트는
	// 존재해야합니다.
	지원 : 지원
});

if (typeof Symbol === "기능") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// class2type 맵 채우기
jQuery.each ( "부울 숫자 문자열 함수 배열 날짜 RegExp 객체 오류 기호".split ( ""),
function (_i, 이름) {
	class2type [ "[객체"+ 이름 + "]"] = name.toLowerCase ();
});

function isArrayLike (obj) {

	// 지원 : 실제 iOS 8.2 만 해당 (시뮬레이터에서 재현 할 수 없음)
	// JIT 오류 방지를 위해 사용되는 ʻin` 검사 (gh-2145)
	// 위음성으로 인해 여기에서는 hasOwn이 사용되지 않습니다.
	// IE의 Nodelist 길이 관련
	var length = !! obj && "length"in obj && obj.length,
		유형 = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		거짓 반환;
	}

	반환 유형 === "배열"|| 길이 === 0 ||
		typeof 길이 === "숫자"&& 길이> 0 && (길이-1) in obj;
}
var Sizzle =
/ *!
 * Sizzle CSS 선택기 엔진 v2.3.5
 * https://sizzlejs.com/
 *
 * 저작권 JS 재단 및 기타 기여자
 * MIT 라이선스로 출시
 * https://js.foundation/
 *
 * 날짜 : 2020-03-14
 * /
(함수 (창) {
var i,
	지원하다,
	Expr,
	getText,
	isXML,
	토큰 화,
	엮다,
	고르다,
	outermostContext,
	sortInput,
	hasDuplicate,

	// 로컬 문서 변수
	setDocument,
	문서,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	성냥,
	포함,

	// 인스턴스 별 데이터
	expando = "sizzle"+ 1 * new Date (),
	preferredDoc = window.document,
	dirruns = 0,
	완료 = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	nonnativeSelectorCache = createCache (),
	sortOrder = function (a, b) {
		if (a === b) {
			hasDuplicate = true;
		}
		반환 0;
	},

	// 인스턴스 메서드
	hasOwn = ({}) .hasOwnProperty,
	arr = [],
	팝 = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	슬라이스 = arr.slice,

	// 네이티브보다 빠르기 때문에 제거 된 indexOf를 사용합니다.
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function (list, elem) {
		var i = 0,
			len = list.length;
		for (; i <len; i ++) {
			if (list [i] === elem) {
				반환 i;
			}
		}
		반환 -1;
	},

	booleans = "checked | selected | async | autofocus | autoplay | controls | defer | disabled | hidden |" +
		"ismap | loop | multiple | open | readonly | 필수 | 범위 지정",

	// 정규 표현식

	// http://www.w3.org/TR/css3-selectors/#whitespace
	공백 = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	식별자 = "(? : \\\\ [\\ da-fA-F] {1,6}"+ 공백 +
		"? | \\\\ [^ \\ r \\ n \\ f] | [\\ w-] | [^ \ 0-\\ x7f]) +",

	// 속성 선택기 : http://www.w3.org/TR/selectors/#attribute-selectors
	속성 = "\\ ["+ 공백 + "* ("+ 식별자 + ") (?:"+ 공백 +

		// 연산자 (캡처 2)
		"* ([* ^ $ |! ~]? =)"+ 공백 +

		// "속성 값은 CSS 식별자 여야합니다 [캡처 5].
		// 또는 문자열 [캡처 3 또는 캡처 4] "
		"* (? : '((? : \\\\. | [^ \\\\']) *) '| \"((? : \\\\. | [^ \\\\\ "] ) *) \ "| ("+ 식별자 + ")) |)"+
		공백 + "* \\]",

	의사 = ":("+ 식별자 + ") (? : \\ (("+

		// preFilter에서 토큰 화해야하는 선택기 수를 줄이려면 다음 인수를 선호합니다.
		// 1. 인용 됨 (캡처 3, 캡처 4 또는 캡처 5)
		"( '((? : \\\\. | [^ \\\\']) *) '| \"((? : \\\\. | [^ \\\\\ "]) *) \ ") |"+

		// 2. 단순 (캡처 6)
		"((? : \\\\. | [^ \\\\ () [\\]] |"+ 속성 + ") *) |" +

		// 3. 기타 (캡처 2)
		". *"+
		") \\) |)",

	// 선행 및 이스케이프되지 않은 후행 공백, 후자 앞에 오는 일부 공백이 아닌 문자 캡처
	rwhitespace = new RegExp (whitespace + "+", "g"),
	rtrim = new RegExp ( "^"+ 공백 + "+ | ((? : ^ | [^ \\\\]) (? : \\\\.) *)"+
		공백 + "+ $", "g"),

	rcomma = new RegExp ( "^"+ 공백 + "*,"+ 공백 + "*"),
	rcombinators = new RegExp ( "^"+ whitespace + "* ([> + ~] |"+ whitespace + ")"+ whitespace +
		"*"),
	rdescend = new RegExp (whitespace + "|>"),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ( "^"+ identifier + "$"),

	matchExpr = {
		"ID": 새 RegExp ( "^ # ("+ 식별자 + ")"),
		"CLASS": 새 RegExp ( "^ \\. ("+ 식별자 + ")"),
		"TAG": 새 RegExp ( "^ ("+ 식별자 + "| [*])"),
		"ATTR": 새로운 RegExp ( "^"+ 속성),
		"PSEUDO": 새로운 RegExp ( "^"+ pseudos),
		"CHILD": new RegExp ( "^ :( only | first | last | nth | nth-last)-(child | of-type) (? : \\ ("+
			공백 + "* (짝수 | 홀수 | (([+-] |) (\\ d *) n |)"+ 공백 + "* (? : ([+-] |)"+
			공백 + "* (\\ d +) |))"+ 공백 + "* \\) |)", "i"),
		"bool": new RegExp ( "^ (?:"+ 부울 + ") $", "i"),

		// .is ()를 구현하는 라이브러리에서 사용
		//`select`에서 POS 매칭에 사용합니다.
		"needsContext": new RegExp ( "^"+ 공백 +
			"* [> + ~] | :( 짝수 | 홀수 | eq | gt | lt | nth | first | last) (? : \\ ("+ 공백 +
			"* ((? :-\\ d)? \\ d *)"+ 공백 + "* \\) |) (? = [^-] | $)", "i")
	},

	rhtml = / HTML $ / i,
	rinputs = / ^ (?: input | select | textarea | button) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [네이티브 \ w /,

	// 쉽게 구문 분석 / 검색 가능한 ID 또는 TAG 또는 CLASS 선택자
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = / [+ ~] /,

	// CSS 이스케이프
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ( "\\\\ [\\ da-fA-F] {1,6}"+ 공백 + "? | \\\\ ([^ \\ r \\ n \\ f])" , "g"),
	funescape = function (escape, nonHex) {
		var high = "0x"+ escape.slice (1)-0x10000;

		nonHex를 반환합니까?

			// 16 진수가 아닌 이스케이프 시퀀스에서 백 슬래시 접두사를 제거합니다.
			nonHex :

			// 16 진수 이스케이프 시퀀스를 인코딩 된 유니 코드 코드 포인트로 바꿉니다.
			// 지원 : IE <= 11 +
			// BMP (Basic Multilingual Plane) 외부의 값의 경우 수동으로
			// 서로 게이트 쌍
			높음 <0?
				String.fromCharCode (high + 0x10000) :
				String.fromCharCode (높음 >> 10 | 0xD800, 높음 & 0x3FF | 0xDC00);
	},

	// CSS 문자열 / 식별자 직렬화
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^-? \ d) | ^-$ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w-] / g,
	fcssescape = function (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL은 U + FFFD REPLACEMENT CHARACTER가됩니다.
			if (ch === "\ 0") {
				return "\ uFFFD";
			}

			// 제어 문자와 (위치에 따라 다름) 숫자는 코드 포인트로 이스케이프됩니다.
			return ch.slice (0, -1) + "\\"+
				ch.charCodeAt (ch.length-1) .toString (16) + "";
		}

		// 기타 잠재적으로 특수한 ASCII 문자는 백 슬래시 이스케이프 처리됩니다.
		return "\\"+ ch;
	},

	// iframe에 사용
	// setDocument () 참조
	// 함수 래퍼를 제거하면 "Permission Denied"가 발생합니다.
	// IE의 오류
	unloadHandler = function () {
		setDocument ();
	},

	inDisabledFieldset = addCombinator (
		function (elem) {
			return elem.disabled === true && elem.nodeName.toLowerCase () === "fieldset";
		},
		{dir : "parentNode", 다음 : "legend"}
	);

// push.apply (_, NodeList) 최적화
{
	push.apply (
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	);

	// 지원 : Android <4.0
	// 자동으로 실패하는 push.apply 감지
	// eslint-disable-next-line no-unused-expressions
	arr [preferredDoc.childNodes.length] .nodeType;
} catch (e) {
	push = {적용 : arr.length?

		// 가능하면 슬라이스 활용
		function (target, els) {
			pushNative.apply (target, slice.call (els));
		} :

		// 지원 : IE <9
		// 그렇지 않으면 직접 추가
		function (target, els) {
			var j = target.length,
				나는 = 0;

			// NodeList.length를 신뢰할 수 없습니다.
			while ((target [j ++] = els [i ++])) {}
			target.length = j-1;
		}
	};
}

function Sizzle (selector, context, results, seed) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = 컨텍스트 && context.ownerDocument,

		// 컨텍스트가 문서로 기본 설정되므로 nodeType은 기본적으로 9로 설정됩니다.
		nodeType = 컨텍스트? context.nodeType : 9;

	결과 = 결과 || [];

	// 잘못된 선택기 또는 컨텍스트가있는 호출에서 일찍 반환
	if (typeof selector! == "string"||! selector ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		반환 결과;
	}

	// HTML 문서에서 바로 가기 찾기 작업 (필터와 반대)을 시도합니다.
	if (! seed) {
		setDocument (컨텍스트);
		문맥 = 문맥 || 문서;

		if (documentIsHTML) {

			// 선택기가 충분히 간단한 경우 "get * By *"DOM 메소드를 사용해보십시오.
			// (메서드가 존재하지 않는 DocumentFragment 컨텍스트 제외)
			if (nodeType! == 11 && (match = rquickExpr.exec (selector))) {

				// ID 선택기
				if ((m = match [1])) {

					// 문서 컨텍스트
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// 지원 : IE, Opera, Webkit
							// TODO : 버전 식별
							// getElementById는 ID 대신 이름으로 요소를 일치시킬 수 있습니다.
							if (elem.id === m) {
								results.push (elem);
								반환 결과;
							}
						} else {
							반환 결과;
						}

					// 요소 컨텍스트
					} else {

						// 지원 : IE, Opera, Webkit
						// TODO : 버전 식별
						// getElementById는 ID 대신 이름으로 요소를 일치시킬 수 있습니다.
						if (newContext && (elem = newContext.getElementById (m)) &&
							포함 (context, elem) &&
							elem.id === m) {

							results.push (elem);
							반환 결과;
						}
					}

				// 유형 선택기
				} else if (match [2]) {
					push.apply (results, context.getElementsByTagName (selector));
					반환 결과;

				// 클래스 선택기
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (results, context.getElementsByClassName (m));
					반환 결과;
				}
			}

			// querySelectorAll 활용
			if (support.qsa &&
				! nonnativeSelectorCache [선택자 + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (선택자)) &&

				// 지원 : IE 8 만
				// 개체 요소 제외
				(nodeType! == 1 || context.nodeName.toLowerCase ()! == "object")) {

				newSelector = 선택자;
				newContext = 컨텍스트;

				// qSA는 자식을 평가할 때 범위 지정 루트 외부의 요소를 고려합니다.
				// 우리가 원하는 것이 아닙니다.
				// 이러한 경우에는 모든 선택기 앞에
				// 범위 컨텍스트를 참조하는 ID 선택기가있는 목록입니다.
				// 선행 결합자를 사용할 때도 기술을 사용해야합니다.
				// 이러한 선택자는 querySelectorAll에 의해 인식되지 않습니다.
				//이 기술에 대해 Andrew Dupont에게 감사드립니다.
				if (nodeType === 1 &&
					(rdescend.test (선택자) || rcombinators.test (선택자))) {

					// 형제 선택자에 대한 컨텍스트 확장
					newContext = rsibling.test (선택자) && testContext (context.parentNode) ||
						문맥;

					// 브라우저가 다음과 같은 경우 ID 해킹 대신 : scope를 사용할 수 있습니다.
					// 지원하고 컨텍스트를 변경하지 않는 경우.
					if (newContext! == context ||! support.scope) {

						// 컨텍스트 ID를 캡처하고 필요한 경우 먼저 설정합니다.
						if ((nid = context.getAttribute ( "id"))) {
							nid = nid.replace (rcssescape, fcssescape);
						} else {
							context.setAttribute ( "id", (nid = expando));
						}
					}

					// 목록의 모든 선택기 접두사
					그룹 = tokenize (선택자);
					i = 그룹 길이;
					while (i--) {
						그룹 [i] = (nid? "#"+ nid : ": scope") + ""+
							toSelector (그룹 [i]);
					}
					newSelector = groups.join ( ",");
				}

				{
					push.apply (결과,
						newContext.querySelectorAll (newSelector)
					);
					반환 결과;
				} catch (qsaError) {
					nonnativeSelectorCache (selector, true);
				} 드디어 {
					if (nid === expando) {
						context.removeAttribute ( "id");
					}
				}
			}
		}
	}

	// 다른 모든
	return select (selector.replace (rtrim, "$ 1"), context, results, seed);
}

/ **
 * 제한된 크기의 키-값 캐시 만들기
 * @returns {function (string, object)} 객체 데이터를 자체적으로 저장 한 후 반환합니다.
 * 속성 이름 (공백이 붙은) 문자열 및 (캐시가 Expr.cacheLength보다 큰 경우)
 * 가장 오래된 항목 삭제
 * /
function createCache () {
	var keys = [];

	function cache (key, value) {

		// 기본 프로토 타입 속성과의 충돌을 방지하려면 (key + "") 사용 (문제 # 157 참조)
		if (keys.push (key + "")> Expr.cacheLength) {

			// 가장 최근 항목 만 유지
			캐시 삭제 [keys.shift ()];
		}
		return (cache [key + ""] = value);
	}
	반환 캐시;
}

/ **
 * Sizzle에서 특별히 사용하는 기능 표시
 * @param {Function} fn 표시 할 함수
 * /
function markFunction (fn) {
	fn [expando] = true;
	반환 fn;
}

/ **
 * 요소를 사용한 테스트 지원
 * @param {Function} fn 생성 된 요소를 전달하고 부울 결과를 반환합니다.
 * /
function assert (fn) {
	var el = document.createElement ( "fieldset");

	{
		return !! fn (el);
	} catch (e) {
		거짓 반환;
	} 드디어 {

		// 기본적으로 부모에서 제거
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}

		// IE에서 메모리 해제
		el = null;
	}
}

/ **
 * 지정된 모든 속성에 대해 동일한 처리기를 추가합니다.
 * @param {String} attrs 파이프로 구분 된 속성 목록
 * @param {Function} 핸들러 적용 할 메소드
 * /
function addHandle (attrs, handler) {
	var arr = attrs.split ( "|"),
		i = arr. 길이;

	while (i--) {
		Expr.attrHandle [arr [i]] = 핸들러;
	}
}

/ **
 * 두 형제의 문서 순서 확인
 * @param {요소} a
 * @param {요소} b
 * @returns {Number} a가 b보다 앞에 있으면 0보다 작고 a가 b 뒤에 있으면 0보다 큰 반환
 * /
function siblingCheck (a, b) {
	var cur = b && a,
		diff = 현재 && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex-b.sourceIndex;

	// 두 노드 모두에서 사용 가능한 경우 IE sourceIndex 사용
	if (diff) {
		return diff;
	}

	// b가 a를 따르는 지 확인
	if (cur) {
		while ((cur = cur.nextSibling)) {
			if (cur === b) {
				반환 -1;
			}
		}
	}

	반환? 1 : -1;
}

/ **
 * 입력 유형에 대해 의사에서 사용할 함수를 반환합니다.
 * @param {String} 유형
 * /
function createInputPseudo (type) {
	return function (elem) {
		var name = elem.nodeName.toLowerCase ();
		반환 이름 === "입력"&& elem.type === type;
	};
}

/ **
 * 버튼의 의사에서 사용할 함수를 반환합니다.
 * @param {String} 유형
 * /
function createButtonPseudo (type) {
	return function (elem) {
		var name = elem.nodeName.toLowerCase ();
		return (name === "input"|| name === "button") && elem.type === type;
	};
}

/ **
 * : enabled / : disabled에 대해 의사에서 사용할 함수를 반환합니다.
 * @param {Boolean} 비활성화 : disabled에 대해 true; false for : enabled
 * /
function createDisabledPseudo (disabled) {

	// 알려진 : disabled false positives : fieldset [disabled]> legend : nth-of-type (n + 2) : can-disable
	return function (elem) {

		// 특정 요소 만 : enabled 또는 : disabled와 일치 할 수 있습니다.
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form"in elem) {

			// 비활성화되지 않은 관련 요소에서 상속 된 비활성화 여부를 확인합니다.
			// * 비활성화 된 필드 셋에 나열된 양식 관련 요소
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * 비활성화 된 optgroup의 옵션 요소
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// 이러한 모든 요소에는 "form"속성이 있습니다.
			if (elem.parentNode && elem.disabled === false) {

				// 옵션 요소가있는 경우 상위 optgroup으로 연기
				if (elem의 "label") {
					if (elem.parentNode의 "label") {
						return elem.parentNode.disabled === 비활성화 됨;
					} else {
						return elem.disabled === 비활성화 됨;
					}
				}

				// 지원 : IE 6-11
				// isDisabled 바로 가기 속성을 사용하여 비활성화 된 필드 셋 조상을 확인합니다.
				return elem.isDisabled === 비활성화 ||

					// isDisabled가없는 경우 수동으로 확인합니다.
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
					inDisabledFieldset (elem) === 비활성화 됨;
			}

			return elem.disabled === 비활성화 됨;

		// disabled 속성을 신뢰하기 전에 비활성화 할 수없는 요소를 찾아 내십시오.
		// 일부 희생자들은 우리의 그물 (라벨, 범례, 메뉴, 트랙)에 걸리지 만,
		// 부울 값은 고사하고 그들 위에 존재합니다.
		} else if ( "label"in elem) {
			return elem.disabled === 비활성화 됨;
		}

		// 나머지 요소는 : enabled도 : disabled도 아닙니다.
		거짓 반환;
	};
}

/ **
 * 위치에 대한 의사에서 사용할 함수를 반환합니다.
 * @param {기능} fn
 * /
function createPositionalPseudo (fn) {
	return markFunction (function (argument) {
		인수 = + 인수;
		return markFunction (function (seed, matches) {
			var j,
				matchIndexes = fn ([], seed.length, 인수),
				i = matchIndexes.length;

			// 지정된 인덱스에서 찾은 요소 일치
			while (i--) {
				if (seed [(j = matchIndexes [i])]) {
					seed [j] =! (match [j] = seed [j]);
				}
			}
		});
	});
}

/ **
 * 노드의 유효성을 Sizzle 컨텍스트로 확인합니다.
 * @param {Element | Object =} 컨텍스트
 * @returns {Element | Object | Boolean} 허용되는 경우 입력 노드, 그렇지 않으면 잘못된 값
 * /
function testContext (context) {
	return context && typeof context.getElementsByTagName! == "undefined"&& context;
}

// 편의를 위해 지원 변수 노출
지원 = Sizzle.support = {};

/ **
 * XML 노드 감지
 * @param {Element | Object} elem 요소 또는 문서
 * @returns {Boolean} elem이 HTML이 아닌 XML 노드 인 경우 True
 * /
isXML = Sizzle.isXML = function (elem) {
	var 네임 스페이스 = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem) .documentElement;

	// 지원 : IE <= 8
	// iframe 로딩과 같이 documentElement가 아직 존재하지 않을 때 HTML을 가정합니다.
	// https://bugs.jquery.com/ticket/4833
	return! rhtml.test (namespace || docElem && docElem.nodeName || "HTML");
};

/ **
 * 현재 문서를 기준으로 문서 관련 변수를 한 번 설정
 * @param {Element | Object} [doc] 문서를 설정하는 데 사용할 요소 또는 문서 객체
 * @returns {Object} 현재 문서를 반환합니다.
 * /
setDocument = Sizzle.setDocument = function (node) {
	var hasCompare, subWindow,
		doc = 노드? node.ownerDocument || 노드 : preferredDoc;

	// 문서가 유효하지 않거나 이미 선택된 경우 일찍 반환
	// 지원 : IE 11+, Edge 17-18+
	// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
	// 두 개의 문서; 얕은 비교가 작동합니다.
	// eslint-disable-next-line eqeqeq
	if (doc == 문서 || doc.nodeType! == 9 ||! doc.documentElement) {
		반환 문서;
	}

	// 전역 변수 업데이트
	문서 = 문서;
	docElem = document.documentElement;
	documentIsHTML =! isXML (문서);

	// 지원 : IE 9-11 +, Edge 12-18 +
	// 언로드 후 iframe 문서에 액세스하면 "permission denied"오류가 발생합니다 (jQuery # 13936).
	// 지원 : IE 11+, Edge 17-18+
	// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
	// 두 개의 문서; 얕은 비교가 작동합니다.
	// eslint-disable-next-line eqeqeq
	if (preferredDoc! = 문서 &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// 지원 : IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ( "unload", unloadHandler, false);

		// 지원 : IE 9-10 만
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ( "onunload", unloadHandler);
		}
	}

	// 지원 : IE 8-11 +, Edge 12-18 +, Chrome <= 16-25 만, Firefox <= 3.6-31 만,
	// Safari 4-5 전용, Opera <= 11.6-12.x 전용
	// IE / Edge 및 이전 브라우저는 : scope 의사 클래스를 지원하지 않습니다.
	// 지원 : Safari 6.0 만
	// Safari 6.0은 : scope를 지원하지만 거기에는 : root의 별칭입니다.
	support.scope = assert (function (el) {
		docElem.appendChild (el) .appendChild (document.createElement ( "div"));
		return typeof el.querySelectorAll! == "정의되지 않음"&&
			! el.querySelectorAll ( ": scope fieldset div") .length;
	});

	/ * 속성
	-------------------------------------------------- -------------------- * /

	// 지원 : IE <8
	// getAttribute가 실제로 속성이 아닌 속성을 반환하는지 확인
	// (IE8 부울 제외)
	support.attributes = assert (function (el) {
		el.className = "i";
		return! el.getAttribute ( "className");
	});

	/ * getElement (s) By *
	-------------------------------------------------- -------------------- * /

	// getElementsByTagName ( "*")이 요소 만 반환하는지 확인
	support.getElementsByTagName = assert (function (el) {
		el.appendChild (document.createComment ( ""));
		return! el.getElementsByTagName ( "*") .length;
	});

	// 지원 : IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// 지원 : IE <10
	// getElementById가 이름으로 요소를 반환하는지 확인
	// 깨진 getElementById 메서드는 프로그래밍 방식으로 설정된 이름을 선택하지 않습니다.
	// 원형 교차로 getElementsByName 테스트를 사용합니다.
	support.getById = assert (function (el) {
		docElem.appendChild (el) .id = expando;
		return! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// ID 필터 및 찾기
	if (support.getById) {
		Expr.filter [ "ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			return function (elem) {
				return elem.getAttribute ( "id") === attrId;
			};
		};
		Expr.find [ "ID"] = function (id, context) {
			if (typeof context.getElementById! == "정의되지 않음"&& documentIsHTML) {
				var elem = context.getElementById (id);
				elem을 반환 하시겠습니까? [elem] : [];
			}
		};
	} else {
		Expr.filter [ "ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			return function (elem) {
				var node = typeof elem.getAttributeNode! == "정의되지 않음"&&
					elem.getAttributeNode ( "id");
				리턴 노드 && node.value === attrId;
			};
		};

		// 지원 : IE 6-7 만
		// getElementById는 바로 가기 찾기로 신뢰할 수 없습니다.
		Expr.find [ "ID"] = function (id, context) {
			if (typeof context.getElementById! == "정의되지 않음"&& documentIsHTML) {
				var 노드, i, elems,
					elem = context.getElementById (id);

				if (elem) {

					// id 속성 확인
					node = elem.getAttributeNode ( "id");
					if (node ​​&& node.value === id) {
						return [elem];
					}

					// getElementsByName에서 폴백
					elems = context.getElementsByName (id);
					나는 = 0;
					while ((elem = elems [i ++])) {
						node = elem.getAttributeNode ( "id");
						if (node ​​&& node.value === id) {
							return [elem];
						}
					}
				}

				반환 [];
			}
		};
	}

	// 태그
	Expr.find [ "TAG"] = support.getElementsByTagName?
		function (태그, 컨텍스트) {
			if (typeof context.getElementsByTagName! == "undefined") {
				return context.getElementsByTagName (tag);

			// DocumentFragment 노드에는 gEBTN이 없습니다.
			} else if (support.qsa) {
				return context.querySelectorAll (tag);
			}
		} :

		function (태그, 컨텍스트) {
			var elem,
				tmp = [],
				나는 = 0,

				// 우연의 일치로 DocumentFragment 노드에도 (깨진) gEBTN이 나타납니다.
				결과 = context.getElementsByTagName (tag);

			// 가능한 댓글 필터링
			if (tag === "*") {
				while ((elem = results [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				반환 tmp;
			}
			반환 결과;
		};

	// 수업
	Expr.find [ "CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == "정의되지 않음"&& documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSA 및 matchesSelector 지원

	// matchesSelector (: active) true 일 때 false보고 (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus)가 true 일 때 false를보고합니다 (Chrome 21).
	// 오류를 발생시키는 IE8 / 9의 버그 때문에 허용됩니다.
	// iframe에서`document.activeElement`에 액세스 할 때마다
	// 따라서 IE 오류를 방지하기 위해 항상 : focus가 QSA를 통과하도록 허용합니다.
	// https://bugs.jquery.com/ticket/13378 참조
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {

		// QSA 정규식 빌드
		// Diego Perini에서 채택한 정규식 전략
		assert (function (el) {

			var input;

			// Select는 의도적으로 빈 문자열로 설정됩니다.
			// not 명시 적으로 IE의 처리를 테스트하기위한 것입니다.
			// 부울 콘텐츠 속성 설정,
			// 그것의 존재는 충분해야하기 때문에
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>"+
				"<select id = '"+ expando + "-\ r \\'msallowcapture = ''>"+
				"<option selected = ''> </ option> </ select>";

			// 지원 : IE8, Opera 11-12.16
			// ^ =, $ = 또는 * = 뒤에 빈 문자열이 올 때 아무것도 선택하지 않아야합니다.
			// 테스트 속성은 Opera에서는 알 수 없지만 WinRT에서는 "안전"해야합니다.
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ( "[msallowcapture ^ = '']") .length) {
				rbuggyQSA.push ( "[* ^ $] ="+ 공백 + "* (?: ''| \"\ ")");
			}

			// 지원 : IE8
			// 부울 속성 및 "값"이 올바르게 처리되지 않음
			if (! el.querySelectorAll ( "[선택됨]") .length) {
				rbuggyQSA.push ( "\\ ["+ 공백 + "* (?: 값 |"+ 부울 + ")");
			}

			// 지원 : Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ( "[id ~ ="+ expando + "-]") .length) {
				rbuggyQSA.push ( "~ =");
			}

			// 지원 : IE 11+, Edge 15-18+
			// IE 11 / Edge는 경우에 따라`[name = '']`쿼리에서 요소를 찾지 못합니다.
			// 선택이 작동하기 전에 문서에 임시 속성 추가
			// 문제 주변.
			// 흥미롭게도 IE 10 및 이전 버전에는 문제가없는 것 같습니다.
			input = document.createElement ( "input");
			input.setAttribute ( "이름", "");
			el.appendChild (입력);
			if (! el.querySelectorAll ( "[name = '']") .length) {
				rbuggyQSA.push ( "\\ ["+ 공백 + "* name"+ 공백 + "* ="+
					공백 + "* (?: ''| \"\ ")");
			}

			// Webkit / Opera-: checked는 선택된 옵션 요소를 반환해야합니다.
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8에서 여기에 오류가 발생하고 이후 테스트가 표시되지 않습니다.
			if (! el.querySelectorAll ( ": checked") .length) {
				rbuggyQSA.push ( ": 체크 됨");
			}

			// 지원 : Safari 8 이상, iOS 8 이상
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// 인 페이지`selector # id sibling-combinator selector` 실패
			if (! el.querySelectorAll ( "a #"+ expando + "+ *") .length) {
				rbuggyQSA.push ( ". #. + [+ ~]");
			}

			// 지원 : Firefox <= 3.6-5 전용
			// 이전 Firefox는 잘못 이스케이프 된 식별자를 던지지 않습니다.
			el.querySelectorAll ( "\\\ f");
			rbuggyQSA.push ( "[\\ r \\ n \\ f]");
		});

		assert (function (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>"+
				"<select disabled = 'disabled'> <option /> </ select>";

			// 지원 : Windows 8 기본 앱
			// .innerHTML 할당 중에 유형 및 이름 속성이 제한됩니다.
			var input = document.createElement ( "input");
			input.setAttribute ( "type", "hidden");
			el.appendChild (input) .setAttribute ( "name", "D");

			// 지원 : IE8
			// 이름 속성의 대소 문자 구분 적용
			if (el.querySelectorAll ( "[name = d]") .length) {
				rbuggyQSA.push ( "이름"+ 공백 + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5-: enabled / : disabled 및 숨겨진 요소 (숨겨진 요소는 여전히 활성화 됨)
			// IE8에서 여기에 오류가 발생하고 이후 테스트가 표시되지 않습니다.
			if (el.querySelectorAll ( ": enabled") .length! == 2) {
				rbuggyQSA.push ( ": 활성화 됨", ": 비활성화 됨");
			}

			// 지원 : IE9-11 +
			// IE의 : disabled 선택기는 비활성화 된 필드 셋의 자식을 선택하지 않습니다.
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll ( ": disabled") .length! == 2) {
				rbuggyQSA.push ( ": 활성화 됨", ": 비활성화 됨");
			}

			// 지원 : Opera 10-11 전용
			// Opera 10-11은 쉼표 후 유효하지 않은 의사를 던지지 않습니다.
			el.querySelectorAll ( "* ,: x");
			rbuggyQSA.push ( ",. * :");
		});
	}

	if ((support.matchesSelector = rnative.test ((match = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		assert (function (el) {

			// matchSelector를 수행 할 수 있는지 확인
			// 연결이 끊긴 노드 (IE 9)
			support.disconnectedMatch = matches.call (el, "*");

			// 예외와 함께 실패해야합니다.
			// Gecko는 오류를 일으키지 않고 대신 false를 반환합니다.
			matches.call (el, "[s! = ''] : x");
			rbuggyMatches.push ( "! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ( "|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ( "|"));

	/ * 포함
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// 요소에 다른 요소가 포함됨
	// 의도적으로 자체 배타적
	//에서와 같이 요소는 자신을 포함하지 않습니다.
	포함 = hasCompare || rnative.test (docElem.contains)?
		function (a, b) {
			var adown = a.nodeType === 9? a.documentElement : a,
				bup = b && b.parentNode;
			반환 a === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup) :
					a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		} :
		function (a, b) {
			if (b) {
				while ((b = b.parentNode)) {
					if (b === a) {
						true를 반환하십시오.
					}
				}
			}
			거짓 반환;
		};

	/ * 정렬
	-------------------------------------------------- -------------------- * /

	// 문서 순서 정렬
	sortOrder = hasCompare?
	function (a, b) {

		// 중복 제거 플래그
		if (a === b) {
			hasDuplicate = true;
			반환 0;
		}

		// 하나의 입력에만 compareDocumentPosition이있는 경우 메서드 존재에 따라 정렬
		var compare =! a.compareDocumentPosition-! b.compareDocumentPosition;
		if (비교) {
			반환 비교;
		}

		// 두 입력이 동일한 문서에 속하는 경우 위치 계산
		// 지원 : IE 11+, Edge 17-18+
		// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
		// 두 개의 문서; 얕은 비교가 작동합니다.
		// eslint-disable-next-line eqeqeq
		비교 = (a.ownerDocument || a) == (b.ownerDocument || b)?
			a.compareDocumentPosition (b) :

			// 그렇지 않으면 연결이 끊어진 것을 알 수 있습니다.
			1;

		// 연결이 끊긴 노드
		if (비교 & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === 비교)) {

			// 선호하는 문서와 관련된 첫 번째 요소를 선택합니다.
			// 지원 : IE 11+, Edge 17-18+
			// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
			// 두 개의 문서; 얕은 비교가 작동합니다.
			// eslint-disable-next-line eqeqeq
			if (a == 문서 || a.ownerDocument == preferredDoc &&
				contains (preferredDoc, a)) {
				반환 -1;
			}

			// 지원 : IE 11+, Edge 17-18+
			// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
			// 두 개의 문서; 얕은 비교가 작동합니다.
			// eslint-disable-next-line eqeqeq
			if (b == 문서 || b.ownerDocument == preferredDoc &&
				contains (preferredDoc, b)) {
				반환 1;
			}

			// 원래 주문 유지
			return sortInput?
				(indexOf (sortInput, a)-indexOf (sortInput, b)) :
				0;
		}

		반환 비교 & 4? -1 : 1;
	} :
	function (a, b) {

		// 노드가 동일하면 일찍 종료
		if (a === b) {
			hasDuplicate = true;
			반환 0;
		}

		var cur,
			나는 = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// 부모가없는 노드는 문서이거나 연결이 끊어졌습니다.
		if (! aup ||! bup) {

			// 지원 : IE 11+, Edge 17-18+
			// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
			// 두 개의 문서; 얕은 비교가 작동합니다.
			/ * eslint-disable eqeqeq * /
			== 문서를 반환합니까? -1 :
				b == 문서? 1 :
				/ * eslint-enable eqeqeq * /
				aup? -1 :
				bup? 1 :
				sortInput?
				(indexOf (sortInput, a)-indexOf (sortInput, b)) :
				0;

		// 노드가 형제 인 경우 빠른 검사를 수행 할 수 있습니다.
		} else if (aup === bup) {
			return siblingCheck (a, b);
		}

		// 그렇지 않으면 비교를 위해 조상의 전체 목록이 필요합니다.
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// 불일치를 찾는 나무 아래로
		while (ap [i] === bp [i]) {
			i ++;
		}

		내가 돌려줘?

			// 노드에 공통 조상이 있는지 형제 확인 수행
			siblingCheck (ap [i], bp [i]) :

			// 그렇지 않으면 문서의 노드가 먼저 정렬됩니다.
			// 지원 : IE 11+, Edge 17-18+
			// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
			// 두 개의 문서; 얕은 비교가 작동합니다.
			/ * eslint-disable eqeqeq * /
			ap [i] == preferredDoc? -1 :
			bp [i] == preferredDoc? 1 :
			/ * eslint-enable eqeqeq * /
			0;
	};

	반환 문서;
};

Sizzle.matches = function (expr, elements) {
	return Sizzle (expr, null, null, elements);
};

Sizzle.matchesSelector = function (elem, expr) {
	setDocument (elem);

	if (support.matchesSelector && documentIsHTML &&
		! nonnativeSelectorCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		{
			var ret = matches.call (elem, expr);

			// IE 9의 matchesSelector는 연결이 끊긴 노드에서 false를 반환합니다.
			if (ret || support.disconnectedMatch ||

				// 또한 연결이 끊어진 노드는 문서에 있다고합니다.
				// IE 9의 조각
				elem.document && elem.document.nodeType! == 11) {
				반환 ret;
			}
		} catch (e) {
			nonnativeSelectorCache (expr, true);
		}
	}

	return Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (context, elem) {

	// 필요한 경우 문서 변수 설정
	// 지원 : IE 11+, Edge 17-18+
	// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
	// 두 개의 문서; 얕은 비교가 작동합니다.
	// eslint-disable-next-line eqeqeq
	if ((context.ownerDocument || context)! = 문서) {
		setDocument (컨텍스트);
	}
	return contains (context, elem);
};

Sizzle.attr = function (elem, name) {

	// 필요한 경우 문서 변수 설정
	// 지원 : IE 11+, Edge 17-18+
	// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
	// 두 개의 문서; 얕은 비교가 작동합니다.
	// eslint-disable-next-line eqeqeq
	if ((elem.ownerDocument || elem)! = 문서) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],

		// Object.prototype 속성에 속지 마세요 (jQuery # 13807).
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, name,! documentIsHTML) :
			찾으시는 주소가 없습니다;

	return val! == undefined?
		발 :
		support.attributes || ! documentIsHTML?
			elem.getAttribute (이름) :
			(val = elem.getAttributeNode (name)) && val.specified?
				val.value :
				없는;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	throw new Error ( "구문 오류, 인식 할 수없는 표현식 :"+ msg);
};

/ **
 * 문서 정렬 및 중복 제거
 * @param {ArrayLike} 결과
 * /
Sizzle.uniqueSort = function (results) {
	var elem,
		중복 = [],
		j = 0,
		나는 = 0;

	// 중복을 감지 할 수 있다는 것을 * 알지 * 않는 한, 존재한다고 가정합니다.
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = results [i ++])) {
			if (elem === 결과 [i]) {
				j = duplicates.push (i);
			}
		}
		동안 (j--) {
			results.splice (duplicates [j], 1);
		}
	}

	// 객체를 해제하기 위해 정렬 후 입력 지우기
	// https://github.com/jquery/sizzle/pull/225 참조
	sortInput = null;

	반환 결과;
};

/ **
 * DOM 노드 배열의 텍스트 값을 검색하는 유틸리티 함수
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function (elem) {
	var 노드,
		ret = "",
		나는 = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {

		// nodeType이 없으면 배열이됩니다.
		while ((node ​​= elem [i ++])) {

			// 주석 노드를 순회하지 않음
			ret + = getText (노드);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {

		// 요소에 textContent 사용
		// 새 줄의 일관성을 위해 innerText 사용이 제거되었습니다 (jQuery # 11153).
		if (typeof elem.textContent === "문자열") {
			return elem.textContent;
		} else {

			// 자식 트래버스
			for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}

	// 주석 또는 처리 명령 노드를 포함하지 않습니다.

	반환 ret;
};

Expr = Sizzle.selectors = {

	// 사용자가 조정할 수 있습니다.
	cacheLength : 50,

	createPseudo : markFunction,

	일치 : matchExpr,

	attrHandle : {},

	찾기: {},

	상대 : {
		">": {dir : "parentNode", 첫 번째 : true},
		"": {dir : "parentNode"},
		"+": {dir : "previousSibling", 첫 번째 : true},
		"~": {dir : "previousSibling"}
	},

	preFilter : {
		"ATTR": function (match) {
			match [1] = match [1] .replace (runescape, funescape);

			// 인용 여부에 관계없이 주어진 값을 match [3]로 이동
			일치 [3] = (일치 [3] || 일치 [4] ||
				일치 [5] || "") .replace (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = ""+ match [3] + "";
			}

			return match.slice (0, 4);
		},

		"CHILD": function (match) {

			/ * matchExpr [ "CHILD"]에서 일치
				1 가지 유형 (only | nth | ...)
				2 무엇 (자식 | 유형)
				3 개의 인수 (짝수 | 홀수 | \ d * | \ d * n ([+-] \ d +)? | ...)
				4 xn + y 인수의 xn 구성 요소 ([+-]? \ d * n |)
				xn 구성 요소의 5 기호
				xn 구성 요소의 6 x
				y 성분의 7 기호
				y 성분의 8 y
			* /
			match [1] = match [1] .toLowerCase ();

			if (match [1] .slice (0, 3) === "nth") {

				// nth- *에는 인수가 필요합니다.
				if (! match [3]) {
					Sizzle.error (match [0]);
				}

				// Expr.filter.CHILD에 대한 숫자 x 및 y 매개 변수
				// false / true는 각각 0/1로 캐스트된다는 것을 기억하십시오.
				match [4] = + (match [4]?
					match [5] + (match [6] || 1) :
					2 * (match [3] === "even"|| match [3] === "odd"));
				match [5] = + ((match [7] + match [8]) || match [3] === "odd");

				// 다른 유형은 인수를 금지합니다.
			} else if (match [3]) {
				Sizzle.error (match [0]);
			}

			반환 일치;
		},

		"PSEUDO": function (match) {
			var 초과,
				인용되지 않음 =! match [6] && match [2];

			if (matchExpr [ "CHILD"] .test (match [0])) {
				null을 반환합니다.
			}

			// 인용 된 인수를있는 그대로 받아들입니다.
			if (match [3]) {
				일치 [2] = 일치 [4] || 일치 [5] || "";

			// 인용되지 않은 인수에서 초과 문자 제거
			} else if (인용되지 않은 && rpseudo.test (인용되지 않은) &&

				// 토큰 화에서 초과 가져 오기 (재귀 적으로)
				(초과 = tokenize (인용되지 않음, true)) &&

				// 다음 닫는 괄호로 이동
				(초과 = unquoted.indexOf ( ")", unquoted.length-초과)-unquoted.length)) {

				// 초과는 음의 지수입니다.
				일치 [0] = 일치 [0] .slice (0, 초과);
				match [2] = unquoted.slice (0, 초과);
			}

			// 의사 필터 메서드에 필요한 캡처 만 반환 (유형 및 인수)
			return match.slice (0, 3);
		}
	},

	필터 : {

		"TAG": function (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			return nodeNameSelector === "*"?
				함수() {
					true를 반환하십시오.
				} :
				function (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASS": function (className) {
			var pattern = classCache [className + ""];

			반환 패턴 ||
				(pattern = new RegExp ( "(^ |"+ 공백 +
					")"+ className + "("+ 공백 + "| $)")) && classCache (
						className, function (elem) {
							return pattern.test (
								typeof elem.className === "문자열"&& elem.className ||
								typeof elem.getAttribute! == "정의되지 않음"&&
									elem.getAttribute ( "클래스") ||
								""
							);
				});
		},

		"ATTR": function (name, operator, check) {
			return function (elem) {
				var result = Sizzle.attr (elem, name);

				if (결과 == null) {
					반환 연산자 === "! =";
				}
				if (! operator) {
					true를 반환하십시오.
				}

				결과 + = "";

				/ * eslint-disable max-len * /

				반환 연산자 === "="? 결과 === 확인 :
					연산자 === "! ="? 결과! == 확인 :
					연산자 === "^ ="? 확인 && result.indexOf (확인) === 0 :
					연산자 === "* ="? 확인 && result.indexOf (check)> -1 :
					연산자 === "$ ="? 확인 && result.slice (-check.length) === 확인 :
					연산자 === "~ ="? ( ""+ result.replace (rwhitespace, "") + "") .indexOf (check)> -1 :
					연산자 === "| ="? 결과 === 확인 || result.slice (0, check.length + 1) === check + "-":
					그릇된;
				/ * eslint-enable max-len * /

			};
		},

		"CHILD": function (type, what, _argument, first, last) {
			var simple = type.slice (0, 3)! == "nth",
				앞으로 = type.slice (-4)! == "마지막",
				ofType = what === "of-type";

			처음 반환 === 1 && 마지막 === 0?

				// : nth-* (n) 단축키
				function (elem) {
					return !! elem.parentNode;
				} :

				function (elem, _context, xml) {
					var cache, uniqueCache, outerCache, 노드, nodeIndex, 시작,
						dir = 단순! == 앞으로? "nextSibling": "previousSibling",
						부모 = elem.parentNode,
						이름 = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = 거짓;

					if (parent) {

						// :( 첫번째 | 마지막 | 전용)-(자식 | 유형)
						if (단순) {
							동안 (dir) {
								노드 = elem;
								while ((node ​​= node [dir])) {
									if (ofType?
										node.nodeName.toLowerCase () === 이름 :
										node.nodeType === 1) {

										거짓 반환;
									}
								}

								// : only- *에 대한 반대 방향 (아직 그렇게하지 않은 경우)
								start = dir = type === "only"&&! start && "nextSibling";
							}
							true를 반환하십시오.
						}

						시작 = [앞으로? parent.firstChild : parent.lastChild];

						// non-xml : nth-child (...)는 캐시 데이터를`parent`에 저장합니다.
						if (forward && useCache) {

							// 이전에 캐시 된 인덱스에서 ʻelem` 검색

							// ... gzip 친화적 인 방식으로
							노드 = 부모;
							outerCache = 노드 [expando] || (node ​​[expando] = {});

							// 지원 : IE <9 만
							// 복제 된 속성에 대한 방어 (jQuery gh-1709)
							uniqueCache = outerCache [node.uniqueID] ||
								(outerCache [node.uniqueID] = {});

							cache = uniqueCache [유형] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							노드 = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && node && node [dir] ||

								// 처음부터 ʻelem` 찾기로 대체
								(diff = nodeIndex = 0) || start.pop ())) {

								// 발견되면 '부모'의 색인을 캐시하고 중단합니다.
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [유형] = [dirruns, nodeIndex, diff];
									단절;
								}
							}

						} else {

							// 가능한 경우 이전에 캐시 된 요소 색인 사용
							if (useCache) {

								// ... gzip 친화적 인 방식으로
								노드 = elem;
								outerCache = 노드 [expando] || (node ​​[expando] = {});

								// 지원 : IE <9 만
								// 복제 된 속성에 대한 방어 (jQuery gh-1709)
								uniqueCache = outerCache [node.uniqueID] ||
									(outerCache [node.uniqueID] = {});

								cache = uniqueCache [유형] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml : nth-child (...)
							// 또는 : nth-last-child (...) 또는 : nth (-last)?-of-type (...)
							if (diff === false) {

								// 위와 동일한 루프를 사용하여 처음부터 ʻelem`을 찾습니다.
								while ((node ​​= ++ nodeIndex && node && node [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									if ((ofType?
										node.nodeName.toLowerCase () === 이름 :
										node.nodeType === 1) &&
										++ diff) {

										// 발견 된 각 요소의 인덱스 캐시
										if (useCache) {
											outerCache = 노드 [expando] ||
												(node ​​[expando] = {});

											// 지원 : IE <9 만
											// 복제 된 속성에 대한 방어 (jQuery gh-1709)
											uniqueCache = outerCache [node.uniqueID] ||
												(outerCache [node.uniqueID] = {});

											uniqueCache [유형] = [dirruns, diff];
										}

										if (node ​​=== elem) {
											단절;
										}
									}
								}
							}
						}

						// 오프셋을 통합 한 다음주기 크기를 확인합니다.
						diff-= 마지막;
						return diff === 먼저 || (diff % first === 0 && diff / first> = 0);
					}
				};
		},

		"PSEUDO": function (pseudo, argument) {

			// 의사 클래스 이름은 대소 문자를 구분하지 않습니다.
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// 사용자 정의 의사가 대문자로 추가되는 경우 대소 문자 구분에 따라 우선 순위 지정
			// setFilters는 의사에서 상속됨을 기억하십시오.
			var args,
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ( "지원되지 않는 의사 :"+ 의사);

			// 사용자는 createPseudo를 사용하여
			// 필터 함수를 생성하려면 인수가 필요합니다.
			// Sizzle처럼
			if (fn [expando]) {
				return fn (argument);
			}

			// 그러나 이전 서명에 대한 지원 유지
			if (fn.length> 1) {
				args = [의사, 의사, "", 인수];
				return Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (function (seed, matches) {
						var idx,
							일치 = fn (시드, 인수),
							i = matched.length;
						while (i--) {
							idx = indexOf (seed, matched [i]);
							seed [idx] =! (일치 [idx] = 일치 [i]);
						}
					}) :
					function (elem) {
						return fn (elem, 0, args);
					};
			}

			반환 fn;
		}
	},

	의사 : {

		// 잠재적으로 복잡한 의사
		"not": markFunction (function (selector) {

			// 컴파일을 위해 전달 된 선택기를 트리밍
			// 선행 및 후행 처리 방지
			// 결합 자로 공백
			var input = [],
				결과 = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			return matcher [expando]?
				markFunction (function (seed, matches, _context, xml) {
					var elem,
						일치하지 않음 = matcher (seed, null, xml, []),
						i = 종자 길이;

					//`matcher`와 일치하지 않는 요소 일치
					while (i--) {
						if ((elem = 일치하지 않음 [i])) {
							seed [i] =! (match [i] = elem);
						}
					}
				}) :
				function (elem, _context, xml) {
					입력 [0] = 요소;
					matcher (입력, null, xml, 결과);

					// 요소를 유지하지 마십시오 (문제 # 299).
					입력 [0] = null;
					return! results.pop ();
				};
		}),

		"has": markFunction (function (selector) {
			return function (elem) {
				return Sizzle (selector, elem) .length> 0;
			};
		}),

		"포함": markFunction (function (text) {
			text = text.replace (runescape, funescape);
			return function (elem) {
				return (elem.textContent || getText (elem)) .indexOf (text)> -1;
			};
		}),

		// "요소가 : lang () 선택기로 표현되는지 여부
		// 요소의 언어 값만 기반으로합니다.
		// 식별자 C와 같음,
		// 또는 식별자 C로 시작하고 바로 뒤에 "-"가옵니다.
		// 요소의 언어 값에 대한 C의 일치는 대소 문자를 구분하지 않습니다.
		// 식별자 C는 유효한 언어 이름이 아니어도됩니다. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {

			// lang 값은 유효한 식별자 여야합니다.
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ( "지원되지 않는 lang :"+ lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			return function (elem) {
				var elemLang;
				하다 {
					if ((elemLang = documentIsHTML?
						elem.lang :
						elem.getAttribute ( "xml : lang") || elem.getAttribute ( "lang"))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				거짓 반환;
			};
		}),

		// 기타
		"대상": function (elem) {
			var hash = window.location && window.location.hash;
			해시 반환 && hash.slice (1) === elem.id;
		},

		"root": function (elem) {
			return elem === docElem;
		},

		"focus": function (elem) {
			return elem === document.activeElement &&
				(! document.hasFocus || document.hasFocus ()) &&
				!! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// 부울 속성
		"활성화 됨": createDisabledPseudo (false),
		"disabled": createDisabledPseudo (true),

		"checked": function (elem) {

			// CSS3에서 : checked는 선택된 요소와 선택된 요소를 모두 반환해야합니다.
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input"&& !! elem.checked) ||
				(nodeName === "옵션"&& !! elem.selected);
		},

		"선택됨": function (elem) {

			//이 속성에 액세스하면 기본적으로 선택됩니다.
			// Safari의 옵션이 제대로 작동합니다.
			if (elem.parentNode) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// 목차
		"비어 있음": function (elem) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// : empty는 요소 (1) 또는 콘텐츠 노드 (text : 3; cdata : 4; entity ref : 5)에 의해 부정됩니다.
			//하지만 다른 사람에 의한 것이 아님 (코멘트 : 8; 처리 명령 : 7; 등)
			// nodeType <6은 속성 (2)이 자식으로 나타나지 않기 때문에 작동합니다.
			for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					거짓 반환;
				}
			}
			true를 반환하십시오.
		},

		"부모": function (elem) {
			return! Expr.pseudos [ "empty"] (elem);
		},

		// 요소 / 입력 유형
		"헤더": function (elem) {
			return rheader.test (elem.nodeName);
		},

		"입력": function (elem) {
			return rinputs.test (elem.nodeName);
		},

		"버튼": function (elem) {
			var name = elem.nodeName.toLowerCase ();
			반환 이름 === "입력"&& elem.type === "버튼"|| 이름 === "버튼";
		},

		"텍스트": function (elem) {
			var attr;
			return elem.nodeName.toLowerCase () === "입력"&&
				elem.type === "텍스트"&&

				// 지원 : IE <8
				// 새로운 HTML5 속성 값 (예 : "search")은 elem.type === "text"와 함께 나타납니다.
				((attr = elem.getAttribute ( "type")) == null ||
					attr.toLowerCase () === "텍스트");
		},

		// 컬렉션 내 위치
		"첫 번째": createPositionalPseudo (function () {
			return [0];
		}),

		"마지막": createPositionalPseudo (function (_matchIndexes, length) {
			return [길이-1];
		}),

		"eq": createPositionalPseudo (function (_matchIndexes, length, argument) {
			return [인수 <0? 인수 + 길이 : 인수];
		}),

		"짝수": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			for (; i <길이; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			for (; i <길이; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, 길이, 인수) {
			var i = 인수 <0?
				인수 + 길이 :
				인수> 길이?
					길이 :
					논의;
			for (; --i> = 0;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, 길이, 인수) {
			var i = 인수 <0? 인수 + 길이 : 인수;
			for (; ++ i <길이;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos [ "nth"] = Expr.pseudos [ "eq"];

// 버튼 / 입력 유형 의사 추가
for (i in {radio : true, 확인란 : true, 파일 : true, 암호 : true, 이미지 : true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
for (i in {submit : true, reset : true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// 새 setFilter를 만들기위한 쉬운 API
function setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = 새로운 setFilters ();

tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	var matched, match, tokens, type,
		soFar, 그룹, 프리 필터,
		cached = tokenCache [선택자 + ""];

	if (캐시 됨) {
		parseOnly를 반환합니까? 0 : cached.slice (0);
	}

	soFar = 선택기;
	그룹 = [];
	preFilters = Expr.preFilter;

	동안 (soFar) {

		// 쉼표 및 첫 실행
		if (! matched || (match = rcomma.exec (soFar))) {
			if (match) {

				// 후행 쉼표를 유효한 것으로 사용하지 마십시오.
				soFar = soFar.slice (match [0] .length) || 지금까지;
			}
			groups.push ((토큰 = []));
		}

		일치 = 거짓;

		// 결합 자
		if ((match = rcombinators.exec (soFar))) {
			일치 = match.shift ();
			tokens.push ({
				값 : 일치,

				// 하위 조합자를 공간으로 캐스팅
				유형 : match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// 필터
		for (Expr.filter 입력) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(match = preFilters [type] (match)))) {
				일치 = match.shift ();
				tokens.push ({
					값 : 일치,
					유형 : 유형,
					일치 : 일치
				});
				soFar = soFar.slice (matched.length);
			}
		}

		if (! matched) {
			단절;
		}
	}

	// 유효하지 않은 초과 길이 반환
	// 그냥 파싱하는 경우
	// 그렇지 않으면 오류를 던지거나 토큰을 반환합니다.
	parseOnly를 반환합니까 ?
		soFar.length :
		지금까지 ?
			Sizzle.error (선택자) :

			// 토큰 캐시
			tokenCache (선택기, 그룹) .slice (0);
};

function toSelector (tokens) {
	var i = 0,
		len = tokens.length,
		선택기 = "";
	for (; i <len; i ++) {
		선택자 + = 토큰 [i] .value;
	}
	반환 선택자;
}

function addCombinator (matcher, combinator, base) {
	var dir = combinator.dir,
		건너 뛰기 = combinator.next,
		키 = 건너 뛰기 || dir,
		checkNonElements = 기본 && 키 === "parentNode",
		doneName = 완료 ++;

	combinator.first를 반환합니까?

		// 가장 가까운 조상 / 이전 요소에 대해 확인
		function (elem, context, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, context, xml);
				}
			}
			거짓 반환;
		} :

		// 모든 조상 / 이전 요소를 확인합니다.
		function (elem, context, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// XML 노드에 임의의 데이터를 설정할 수 없으므로 결합 자 캐싱의 이점을 얻지 못합니다.
			if (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							true를 반환하십시오.
						}
					}
				}
			} else {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						outerCache = elem [expando] || (elem [expando] = {});

						// 지원 : IE <9 만
						// 복제 된 속성에 대한 방어 (jQuery gh-1709)
						uniqueCache = outerCache [elem.uniqueID] ||
							(outerCache [elem.uniqueID] = {});

						if (skip && skip === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem;
						} else if ((oldCache = uniqueCache [key]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// 결과가 이전 요소로 역 전파되도록 newCache에 할당
							반환 (newCache [2] = oldCache [2]);
						} else {

							// 결과가 이전 요소로 역 전파되도록 newcache를 재사용합니다.
							uniqueCache [키] = newCache;

							// 일치는 완료되었음을 의미합니다. 실패는 계속 확인해야 함을 의미합니다.
							if ((newCache [2] = matcher (elem, context, xml))) {
								true를 반환하십시오.
							}
						}
					}
				}
			}
			거짓 반환;
		};
}

function elementMatcher (matchers) {
	return matchers.length> 1?
		function (elem, context, xml) {
			var i = matchers.length;
			while (i--) {
				if (! matchers [i] (elem, context, xml)) {
					거짓 반환;
				}
			}
			true를 반환하십시오.
		} :
		매처 [0];
}

function multipleContexts (선택자, 컨텍스트, 결과) {
	var i = 0,
		len = contexts.length;
	for (; i <len; i ++) {
		Sizzle (선택자, 컨텍스트 [i], 결과);
	}
	반환 결과;
}

function condense (unmatched, map, filter, context, xml) {
	var elem,
		newUnmatched = [],
		나는 = 0,
		len = 일치하지 않는 길이,
		매핑 됨 =지도! = null;

	for (; i <len; i ++) {
		if ((elem = 일치하지 않음 [i])) {
			if (! filter || filter (elem, context, xml)) {
				newUnmatched.push (elem);
				if (매핑 됨) {
					map.push (i);
				}
			}
		}
	}

	반환 newUnmatched;
}

function setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (function (seed, results, context, xml) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			기존 = results.length,

			// 시드 또는 컨텍스트에서 초기 요소 가져 오기
			elems = 씨앗 || multipleContexts (
				선택기 || "*",
				context.nodeType? [문맥] : 문맥,
				[]
			),

			// 시드 결과 동기화를 위해 맵을 보존하면서 matcher 입력을 얻기위한 사전 필터
			matcherIn = preFilter && (seed ||! selector)?
				condense (elems, preMap, preFilter, context, xml) :
				elems,

			matcherOut = matcher?

				// postFinder, 필터링 된 시드, 시드가 아닌 postFilter 또는 기존 결과가있는 경우
				postFinder || (시드? preFilter : 기존 || postFilter)?

					// ... 중간 처리가 필요합니다.
					[] :

					// ... 그렇지 않으면 결과를 직접 사용
					결과 :
				matcherIn;

		// 기본 일치 찾기
		if (matcher) {
			matcher (matcherIn, matcherOut, context, xml);
		}

		// postFilter 적용
		if (postFilter) {
			temp = condense (matcherOut, postMap);
			postFilter (임시, [], 컨텍스트, xml);

			// 실패한 요소를 matcherIn으로 다시 이동하여 일치 해제
			i = 온도 길이;
			while (i--) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		if (seed) {
			if (postFinder || preFilter) {
				if (postFinder) {

					//이 중간을 postFinder 컨텍스트로 압축하여 최종 matcherOut을 가져옵니다.
					온도 = [];
					i = matcherOut.length;
					while (i--) {
						if ((elem = matcherOut [i])) {

							// elem이 아직 최종 일치가 아니므로 matcherIn을 복원합니다.
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// 일치하는 요소를 시드에서 결과로 이동하여 동기화 상태를 유지합니다.
				i = matcherOut.length;
				while (i--) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (seed, elem) : preMap [i])> -1) {

						seed [temp] =! (results [temp] = elem);
					}
				}
			}

		// 정의 된 경우 postFinder를 통해 결과에 요소 추가
		} else {
			matcherOut = condense (
				matcherOut === 결과?
					matcherOut.splice (preexisting, matcherOut.length) :
					matcherOut
			);
			if (postFinder) {
				postFinder (null, 결과, matcherOut, xml);
			} else {
				push.apply (결과, matcherOut);
			}
		}
	});
}

function matcherFromTokens (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadRelative = Expr.relative [tokens [0] .type],
		implicitRelative = leadRelative || Expr.relative [ ""],
		i = leadRelative? 1 : 0,

		// 기본 매처는 최상위 컨텍스트에서 요소에 도달 할 수 있도록합니다.
		matchContext = addCombinator (function (elem) {
			return elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [function (elem, context, xml) {
			var ret = (! leadingRelative && (xml || context! == outermostContext)) || (
				(checkContext = context) .nodeType?
					matchContext (elem, context, xml) :
					matchAnyContext (elem, context, xml));

			// 요소에 매달리지 않기 (문제 # 299)
			checkContext = null;
			반환 ret;
		}];

	for (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} else {
			matcher = Expr.filter [tokens [i] .type] .apply (null, tokens [i] .matches);

			// 위치 일치자를 볼 때 특별 반환
			if (matcher [expando]) {

				// 적절한 처리를 위해 다음 상대 연산자 (있는 경우)를 찾습니다.
				j = ++ i;
				for (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						단절;
					}
				}
				setMatcher (
					i> 1 && elementMatcher (matchers),
					i> 1 && toSelector (

					// 선행 토큰이 하위 조합자인 경우 암시 적 임의 요소`*`삽입
					토큰
						.slice (0, i-1)
						.concat ({값 : 토큰 [i-2] .type === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					매처,
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (토큰)
				);
			}
			matchers.push (matcher);
		}
	}

	return elementMatcher (matchers);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = function (seed, context, xml, results, outermost) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				일치하지 않음 = 시드 && [],
				setMatched = [],
				contextBackup = outermostContext,

				// 항상 시드 요소 또는 가장 바깥 쪽 컨텍스트가 있어야합니다.
				elems = 씨앗 || byElement && Expr.find [ "TAG"] ( "*", 가장 바깥 쪽),

				// 가장 바깥 쪽 일치자인 경우 정수 디렉터리를 사용합니다.
				dirrunsUnique = (dirruns + = contextBackup == null? 1 : Math.random () || 0.1),
				len = elems.length;

			if (가장 바깥 쪽) {

				// 지원 : IE 11+, Edge 17-18+
				// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
				// 두 개의 문서; 얕은 비교가 작동합니다.
				// eslint-disable-next-line eqeqeq
				outermostContext = 컨텍스트 == 문서 || 컨텍스트 || 가장 바깥 쪽;
			}

			// elementMatchers를 결과에 직접 전달하는 요소 추가
			// 지원 : IE <9, Safari
			// ID로 요소와 일치하는 NodeList 속성 (IE : "length"; Safari : <number>) 허용
			for (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;

					// 지원 : IE 11+, Edge 17-18+
					// IE / Edge는 엄격한 비교시 때때로 "Permission denied"오류를 발생시킵니다.
					// 두 개의 문서; 얕은 비교가 작동합니다.
					// eslint-disable-next-line eqeqeq
					if (! context && elem.ownerDocument! = 문서) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, context || document, xml)) {
							results.push (elem);
							단절;
						}
					}
					if (가장 바깥 쪽) {
						dirruns = dirrunsUnique;
					}
				}

				// 세트 필터에 대해 일치하지 않는 요소 추적
				if (bySet) {

					// 가능한 모든 매처를 통과 할 것입니다.
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// 일치 여부에 관계없이 모든 요소의 배열을 늘립니다.
					if (seed) {
						unmatched.push (elem);
					}
				}
			}

			// ʻi`는 이제 위에서 방문한 요소의 수이며이를`matchedCount`에 추가합니다.
			// 후자를 음수가 아닙니다.
			matchedCount + = i;

			// 일치하지 않는 요소에 세트 필터 적용
			// 참고 : 일치하지 않는 요소가 없으면 건너 뛸 수 있습니다 (예 :`matchedCount`
			// 위의 루프에서 _any_ 요소를 방문하지 않았다면 ʻi`와 같습니다.
			// 요소 매처와 시드가 없습니다.
			// 초기 문자열 "0"ʻi`를 증가 시키면 ʻi`가 그 안에서만 문자열을 유지할 수 있습니다.
			// case, 결과적으로 ʻi`와 다른 "00"`matchedCount`가 생성되지만
			// 숫자로 0.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					matcher (일치하지 않음, setMatched, context, xml);
				}

				if (seed) {

					// 정렬 할 필요가 없도록 요소 일치를 다시 통합
					if (matchedCount> 0) {
						while (i--) {
							if (! (일치하지 않음 [i] || setMatched [i])) {
								setMatched [i] = pop.call (results);
							}
						}
					}

					// 실제 일치 만 얻기 위해 인덱스 자리 표시 자 값을 버립니다.
					setMatched = condense (setMatched);
				}

				// 결과에 일치 항목 추가
				push.apply (results, setMatched);

				// 여러 성공적인 매 처가 성공한 시드리스 세트 매치는 정렬을 규정합니다.
				if (가장 바깥 쪽 &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (결과);
				}
			}

			// 중첩 된 매처에 의한 전역 조작 무시
			if (가장 바깥 쪽) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			타의 추종을 불허하는 반환;
		};

	반환 bySet?
		markFunction (superMatcher) :
		superMatcher;
}

compile = Sizzle.compile = function (selector, match / * Internal Use Only * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [선택기 + ""];

	if (! cached) {

		// 각 요소를 확인하는 데 사용할 수있는 재귀 함수 함수 생성
		if (! match) {
			match = tokenize (선택자);
		}
		i = match.length;
		while (i--) {
			cached = matcherFromTokens (match [i]);
			if (cached [expando]) {
				setMatchers.push (캐시 됨);
			} else {
				elementMatchers.push (캐시 됨);
			}
		}

		// 컴파일 된 함수 캐시
		캐시 됨 = compilerCache (
			선택자,
			matcherFromGroupMatchers (elementMatchers, setMatchers)
		);

		// 선택기 및 토큰 화 저장
		cached.selector = 선택자;
	}
	캐시 된 반환;
};

/ **
 * Sizzle의 컴파일과 함께 작동하는 저수준 선택 기능
 * 선택기 기능
 * @param {String | Function} 선택자 선택자 또는 미리 컴파일 된
 * Sizzle.compile로 빌드 된 선택기 기능
 * @param {Element} 컨텍스트
 * @param {Array} [결과]
 * @param {Array} [seed] 일치시킬 요소 집합
 * /
select = Sizzle.select = function (selector, context, results, seed) {
	var i, 토큰, 토큰, 유형, 찾기,
		컴파일 됨 = 선택기 유형 === "함수"&& 선택기,
		match =! seed && tokenize ((선택기 = 컴파일 됨. 선택기 || 선택기));

	결과 = 결과 || [];

	// 목록에 선택기가 하나만 있고 시드가없는 경우 작업을 최소화합니다.
	// (후자는 컨텍스트를 보장 함)
	if (match.length === 1) {

		// 선행 복합 선택기가 ID 인 경우 컨텍스트를 줄입니다.
		토큰 = 일치 [0] = 일치 [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]) .type === "ID"&&
			context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			컨텍스트 = (Expr.find [ "ID"] (token.matches [0]
				.replace (runescape, funescape), 컨텍스트) || []) [0];
			if (! context) {
				반환 결과;

			// 미리 컴파일 된 매처는 여전히 조상을 확인하므로 한 단계 더 올라갑니다.
			} else if (컴파일 됨) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). value.length);
		}

		// 오른쪽에서 왼쪽으로 일치하는 시드 세트를 가져옵니다.
		i = matchExpr [ "needsContext"] .test (선택자)? 0 : tokens.length;
		while (i--) {
			토큰 = 토큰 [i];

			// 결합자를 치면 중단
			if (Expr.relative [(유형 = token.type)]) {
				단절;
			}
			if ((find = Expr.find [type])) {

				// 선행 형제 결합 자에 대한 검색, 확장 컨텍스트
				if ((seed = find (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (tokens [0] .type) && testContext (context.parentNode) ||
						문맥
				))) {

					// 시드가 비어 있거나 토큰이 남아 있지 않으면 일찍 반환 할 수 있습니다.
					tokens.splice (i, 1);
					selector = seed.length && toSelector (tokens);
					if (! selector) {
						push.apply (결과, 시드);
						반환 결과;
					}

					단절;
				}
			}
		}
	}

	// 필터링 함수가 제공되지 않은 경우 컴파일 및 실행
	// 위의 선택기를 수정 한 경우 재 토큰 화를 방지하기 위해`match`를 제공합니다.
	(컴파일 됨 || compile (selector, match)) (
		씨,
		문맥,
		! documentIsHTML,
		결과,
		! 컨텍스트 || rsibling.test (선택자) && testContext (context.parentNode) || 문맥
	);
	반환 결과;
};

// 일회성 할당

// 정렬 안정성
support.sortStable = expando.split ( "") .sort (sortOrder) .join ( "") === expando;

// 지원 : Chrome 14-35 +
// 비교 함수에 전달되지 않으면 항상 중복으로 간주
support.detectDuplicates = !! hasDuplicate;

// 기본 문서에 대해 초기화
setDocument ();

// 지원 : Webkit <537.32-Safari 6.0.3 / Chrome 25 (Chrome 27에서 수정 됨)
// 분리 된 노드는 * 서로 * 뒤 따른다.
support.sortDetached = assert (function (el) {

	// 1을 반환해야하지만 4를 반환 (다음)
	return el.compareDocumentPosition (document.createElement ( "fieldset")) & 1;
});

// 지원 : IE <8
// 속성 / 속성 "보간"방지
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! assert (function (el) {
	el.innerHTML = "<a href='#'> </a>";
	return el.firstChild.getAttribute ( "href") === "#";
})) {
	addHandle ( "type | href | height | width", function (elem, name, isXML) {
		if (! isXML) {
			return elem.getAttribute (name, name.toLowerCase () === "type"? 1 : 2);
		}
	});
}

// 지원 : IE <9
// getAttribute ( "value") 대신 defaultValue 사용
if (! support.attributes ||! assert (function (el) {
	el.innerHTML = "<입력 />";
	el.firstChild.setAttribute ( "값", "");
	return el.firstChild.getAttribute ( "value") === "";
})) {
	addHandle ( "값", function (elem, _name, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// 지원 : IE <9
// getAttribute가있는 경우 getAttributeNode를 사용하여 부울을 가져옵니다.
if (! assert (function (el) {
	return el.getAttribute ( "disabled") == null;
})) {
	addHandle (booleans, function (elem, name, isXML) {
		var val;
		if (! isXML) {
			return elem [name] === true? name.toLowerCase () :
				(val = elem.getAttributeNode (name)) && val.specified?
					val.value :
					없는;
		}
	});
}

반환 Sizzle;

} )( 창문 );



jQuery.find = 지글 지글;
jQuery.expr = Sizzle.selectors;

// 지원 중단
jQuery.expr [ ":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function (elem, dir, until) {
	var matched = [],
		자르기 = ~까지! == 정의되지 않음;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncate && jQuery (elem) .is (until)) {
				단절;
			}
			matched.push (elem);
		}
	}
	반환 일치;
};


var siblings = function (n, elem) {
	var matched = [];

	for (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			matched.push (n);
		}
	}

	반환 일치;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName (elem, name) {

  return elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0> : \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ? : <\ / \ 1> |) $ / i);



// 필터가 아닌 동일한 기능을 구현합니다.
function winnow (elements, qualifier, not) {
	if (isFunction (한정자)) {
		return jQuery.grep (elements, function (elem, i) {
			return !! qualifier.call (elem, i, elem)! == not;
		});
	}

	// 단일 요소
	if (qualifier.nodeType) {
		return jQuery.grep (elements, function (elem) {
			return (elem === 한정자)! == not;
		});
	}

	// 요소의 배열 유형 (jQuery, 인수, 배열)
	if (typeof 한정자! == "문자열") {
		return jQuery.grep (elements, function (elem) {
			return (indexOf.call (qualifier, elem)> -1)! == not;
		});
	}

	// 단순 및 복합 선택자 모두에 대해 직접 필터링
	return jQuery.filter (qualifier, elements, not);
}

jQuery.filter = function (expr, elems, not) {
	var elem = elems [0];

	if (not) {
		expr = ": not ("+ expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector (elem, expr)? [elem] : [];
	}

	return jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	찾기 : function (selector) {
		var i, ret,
			len = this.length,
			self = this;

		if (typeof 선택기! == "문자열") {
			return this.pushStack (jQuery (selector) .filter (function () {
				for (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						true를 반환하십시오.
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		for (i = 0; i <len; i ++) {
			jQuery.find (선택기, self [i], ret);
		}

		반환 len> 1? jQuery.uniqueSort (ret) : ret;
	},
	필터 : function (selector) {
		return this.pushStack (winnow (this, selector || [], false));
	},
	not : function (selector) {
		return this.pushStack (winnow (this, selector || [], true));
	},
	is : function (selector) {
		return !! winnow (
			이,

			// 이것이 위치 / 상대 선택자인 경우 반환 된 집합에서 멤버 자격을 확인합니다.
			// 따라서 $ ( "p : first"). is ( "p : last")는 "p"가 두 개인 문서에 대해 true를 반환하지 않습니다.
			typeof 선택기 === "문자열"&& rneedsContext.test (선택자)?
				jQuery (선택기) :
				선택기 || [],
			그릇된
		).길이;
	}
});


// jQuery 객체 초기화


// 루트 jQuery (document)에 대한 중앙 참조
var rootjQuery,

	// HTML 문자열을 확인하는 간단한 방법
	// location.hash (# 9521)를 통해 XSS를 피하기 위해 <tag>보다 #id를 우선시합니다.
	// 엄격한 HTML 인식 (# 11290 : <로 시작해야 함)
	// 속도에 대한 간단한 #id 케이스 바로 가기
	rquickExpr = / ^ (? : \ s * (<[\ w \ W] +>) [^>] * | # ([\ w-] +)) $ /,

	init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// 핸들 : $ ( ""), $ (null), $ (정의되지 않음), $ (false)
		if (! selector) {
			이것을 반환하십시오;
		}

		// init () 메소드는 대체 rootjQuery를받습니다.
		// 마이그레이션은 jQuery.sub (gh-2101)를 지원할 수 있습니다.
		루트 = 루트 || rootjQuery;

		// HTML 문자열 처리
		if (typeof 선택기 === "문자열") {
			if (선택기 [0] === "<"&&
				선택기 [선택기. 길이-1] === ">"&&
				selector.length> = 3) {

				// <>로 시작하고 끝나는 문자열이 HTML이라고 가정하고 정규식 검사를 건너 뜁니다.
				match = [null, 선택자, null];

			} else {
				match = rquickExpr.exec (선택자);
			}

			// html과 일치하거나 #id에 컨텍스트가 지정되지 않았는지 확인
			if (match && (match [1] ||! context)) {

				// 핸들 : $ (html)-> $ (배열)
				if (match [1]) {
					context = context instanceof jQuery? context [0] : 컨텍스트;

					// 스크립트 실행 옵션은 back-compat에 대해 true입니다.
					// parseHTML이없는 경우 의도적으로 오류가 발생하도록합니다.
					jQuery.merge (this, jQuery.parseHTML (
						match [1],
						컨텍스트 && context.nodeType? context.ownerDocument || 컨텍스트 : 문서,
						진실
					));

					// 핸들 : $ (html, props)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (context)) {
						for (문맥 일치) {

							// 가능한 경우 컨텍스트의 속성이 메서드로 호출됩니다.
							if (isFunction (this [match])) {
								this [match] (context [match]);

							// ... 그렇지 않으면 속성으로 설정
							} else {
								this.attr (match, context [match]);
							}
						}
					}

					이것을 반환하십시오;

				// 핸들 : $ (# id)
				} else {
					elem = document.getElementById (match [2]);

					if (elem) {

						// 요소를 jQuery 객체에 직접 삽입합니다.
						this [0] = elem;
						this.length = 1;
					}
					이것을 반환하십시오;
				}

			// 핸들 : $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (context || root) .find (selector);

			// 핸들 : $ (expr, context)
			// (다음과 동일합니다 : $ (context) .find (expr)
			} else {
				return this.constructor (context) .find (selector);
			}

		// 핸들 : $ (DOMElement)
		} else if (selector.nodeType) {
			this [0] = 선택자;
			this.length = 1;
			이것을 반환하십시오;

		// 핸들 : $ (함수)
		// 문서 준비를위한 바로 가기
		} else if (isFunction (선택자)) {
			return root.ready! == undefined?
				root.ready (선택기) :

				// 준비가 없으면 즉시 실행
				선택기 (jQuery);
		}

		return jQuery.makeArray (selector, this);
	};

// 나중에 인스턴스화 할 수 있도록 init 함수에 jQuery 프로토 타입을 제공합니다.
init.prototype = jQuery.fn;

// 중앙 참조 초기화
rootjQuery = jQuery (문서);


var rparentsprev = / ^ (?: parents | prev (? : Until | All)) /,

	// 고유 한 집합에서 시작할 때 고유 한 집합을 생성하도록 보장되는 메서드
	보장 된 고유 = {
		아이들 : 사실,
		내용 : 참,
		다음 : 참,
		이전 : 참
	};

jQuery.fn.extend ({
	has : function (target) {
		var targets = jQuery (target, this),
			l = targets.length;

		return this.filter (function () {
			var i = 0;
			for (; i <l; i ++) {
				if (jQuery.contains (this, targets [i])) {
					true를 반환하십시오.
				}
			}
		});
	},

	가장 가까운 : function (selectors, context) {
		var cur,
			나는 = 0,
			l = this.length,
			일치 = [],
			targets = 선택자 유형! == "문자열"&& jQuery (선택자);

		// _selection_ 컨텍스트가 없으므로 위치 선택자는 일치하지 않습니다.
		if (! rneedsContext.test (선택자)) {
			for (; i <l; i ++) {
				for (cur = this [i]; cur && cur! == context; cur = cur.parentNode) {

					// 항상 문서 조각 건너 뛰기
					if (cur.nodeType <11 && (targets?
						targets.index (cur)> -1 :

						// 비 요소를 Sizzle에 전달하지 마십시오
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, selectors))) {

						matched.push (cur);
						단절;
					}
				}
			}
		}

		return this.pushStack (matched.length> 1? jQuery.uniqueSort (matched) : matched);
	},

	// 집합 내 요소의 위치 결정
	인덱스 : function (elem) {

		// 인수 없음, 부모의 인덱스 반환
		if (! elem) {
			return (this [0] && this [0] .parentNode)? this.first (). prevAll (). length : -1;
		}

		// 선택기의 색인
		if (typeof elem === "문자열") {
			return indexOf.call (jQuery (elem), this [0]);
		}

		// 원하는 요소의 위치를 ​​찾습니다.
		return indexOf.call (이,

			// jQuery 객체를 받으면 첫 번째 요소가 사용됩니다.
			elem.jquery? elem [0] : elem
		);
	},

	추가 : function (selector, context) {
		return this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (selector, context))
			)
		);
	},

	addBack : function (selector) {
		return this.add (selector == null?
			this.prevObject : this.prevObject.filter (선택기)
		);
	}
});

function sibling (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	반환 cur;
}

jQuery.each ({
	부모 : function (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? 부모 : null;
	},
	부모 : function (elem) {
		return dir (elem, "parentNode");
	},
	parentUntil : function (elem, _i, until) {
		return dir (elem, "parentNode", until);
	},
	다음 : function (elem) {
		형제 반환 (elem, "nextSibling");
	},
	이전 : function (elem) {
		return sibling (elem, "previousSibling");
	},
	nextAll : function (elem) {
		return dir (elem, "nextSibling");
	},
	prevAll : function (elem) {
		return dir (elem, "previousSibling");
	},
	nextUntil : function (elem, _i, until) {
		return dir (elem, "nextSibling", until);
	},
	prevUntil : function (elem, _i, until) {
		return dir (elem, "previousSibling", until);
	},
	형제 : function (elem) {
		return siblings ((elem.parentNode || {}) .firstChild, elem);
	},
	자식 : function (elem) {
		형제 반환 (elem.firstChild);
	},
	내용 : function (elem) {
		if (elem.contentDocument! = null &&

			// 지원 : IE 11 이상
			//`data` 속성이없는 <object> 요소에는 객체가 있습니다.
			//`null` 프로토 타입이있는`contentDocument`.
			getProto (elem.contentDocument)) {

			return elem.contentDocument;
		}

		// 지원 : IE 9-11 전용, iOS 7 전용, Android 브라우저 <= 4.3 전용
		// 브라우저에서 템플릿 요소를 일반 요소로 취급합니다.
		// 지원하지 않습니다.
		if (nodeName (elem, "템플릿")) {
			elem = elem.content || elem;
		}

		return jQuery.merge ([], elem.childNodes);
	}
}, function (name, fn) {
	jQuery.fn [이름] = function (until, selector) {
		var matched = jQuery.map (this, fn, until);

		if (name.slice (-5)! == "까지") {
			선택기 =까지;
		}

		if (selector && typeof selector === "string") {
			matched = jQuery.filter (selector, matched);
		}

		if (this.length> 1) {

			// 중복 제거
			if (! guaranteedUnique [name]) {
				jQuery.uniqueSort (matched);
			}

			// 부모 * 및 이전 파생물에 대한 역순
			if (rparentsprev.test (이름)) {
				matched.reverse ();
			}
		}

		return this.pushStack (matched);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// 문자열 형식의 옵션을 객체 형식의 옵션으로 변환
function createOptions (options) {
	var 객체 = {};
	jQuery.each (options.match (rnothtmlwhite) || [], function (_, flag) {
		개체 [플래그] = 참;
	});
	반환 개체;
}

/ *
 * 다음 매개 변수를 사용하여 콜백 목록을 만듭니다.
 *
 * 옵션 : 방법을 변경하는 공백으로 구분 된 옵션 목록
 * 콜백 목록이 동작하거나 더 전통적인 옵션 객체
 *
 * 기본적으로 콜백 목록은 이벤트 콜백 목록처럼 작동하며
 * 여러 번 "발사 됨".
 *
 * 가능한 옵션 :
 *
 * 한 번 : 콜백 목록이 한 번만 실행되도록합니다 (예 : Deferred).
 *
 * 메모리 : 이전 값을 추적하고 추가 된 모든 콜백을 호출합니다.
 * 목록이 최신 "기억"으로 즉시 실행 된 후
 * 값 (예 : 지연됨)
 *
 * 고유 : 콜백을 한 번만 추가 할 수 있습니다 (목록에 중복되지 않음).
 *
 * stopOnFalse : 콜백이 false를 반환 할 때 호출 중단
 *
 * /
jQuery.Callbacks = function (options) {

	// 필요한 경우 옵션을 문자열 형식에서 개체 형식으로 변환
	// (먼저 캐시를 체크인합니다)
	options = typeof options === "string"?
		createOptions (옵션) :
		jQuery.extend ({}, 옵션);

	var // 목록이 현재 실행 중인지 알기위한 플래그
		발사,

		// 잊을 수없는 목록의 마지막 실행 값
		기억,

		// 목록이 이미 실행되었는지 확인하기위한 플래그
		해고,

		// 실행 방지 플래그
		잠김,

		// 실제 콜백 목록
		목록 = [],

		// 반복 가능한 목록에 대한 실행 데이터 큐
		대기열 = [],

		// 현재 실행중인 콜백의 인덱스 (필요에 따라 추가 / 제거하여 수정)
		firingIndex = -1,

		// 콜백 실행
		fire = function () {

			// 단일 발사 시행
			잠김 = 잠김 || options.once;

			// 보류중인 모든 실행에 대해 콜백을 실행합니다.
			// firingIndex 재정의 및 런타임 변경 사항 준수
			발사 = 발사 = 참;
			for (; queue.length; firingIndex = -1) {
				메모리 = queue.shift ();
				while (++ firingIndex <list.length) {

					// 콜백 실행 및 조기 종료 확인
					if (list [firingIndex] .apply (memory [0], memory [1]) === false &&
						options.stopOnFalse) {

						// 끝으로 이동하고 데이터를 잊어 버려 .add가 다시 실행되지 않도록합니다.
						firingIndex = list.length;
						메모리 = 거짓;
					}
				}
			}

			// 작업이 끝나면 데이터를 잊습니다.
			if (! options.memory) {
				메모리 = 거짓;
			}

			발사 = 거짓;

			// 발사가 끝났 으면 정리
			if (잠김) {

				// 향후 추가 호출을위한 데이터가 있으면 빈 목록을 유지합니다.
				if (메모리) {
					목록 = [];

				// 그렇지 않으면이 개체가 사용됩니다.
				} else {
					목록 = "";
				}
			}
		},

		// 실제 콜백 객체
		self = {

			// 목록에 콜백 또는 콜백 모음 추가
			추가 : function () {
				if (목록) {

					// 과거 실행의 메모리가있는 경우 추가 한 후 실행해야합니다.
					if (memory &&! firing) {
						firingIndex = list.length-1;
						queue.push (메모리);
					}

					(function add (args) {
						jQuery.each (args, function (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "문자열") {

								// 재귀 적으로 검사
								add (arg);
							}
						});
					}) (인수);

					if (memory &&! firing) {
						불();
					}
				}
				이것을 반환하십시오;
			},

			// 목록에서 콜백 제거
			제거 : function () {
				jQuery.each (arguments, function (_, arg) {
					var index;
					while ((index = jQuery.inArray (arg, list, index))> -1) {
						list.splice (index, 1);

						// 실행 인덱스 처리
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				이것을 반환하십시오;
			},

			// 주어진 콜백이 목록에 있는지 확인합니다.
			// 인수가 제공되지 않으면 목록에 콜백이 첨부되었는지 여부를 반환합니다.
			has : function (fn) {
				return fn?
					jQuery.inArray (fn, list)> -1 :
					list.length> 0;
			},

			// 목록에서 모든 콜백 제거
			비어 있음 : function () {
				if (목록) {
					목록 = [];
				}
				이것을 반환하십시오;
			},

			// .fire 및 .add 비활성화
			// 현재 / 보류중인 실행을 중단합니다.
			// 모든 콜백 및 값 지우기
			비활성화 : function () {
				잠김 = 대기열 = [];
				목록 = 메모리 = "";
				이것을 반환하십시오;
			},
			비활성화 됨 : function () {
				return! list;
			},

			// .fire 비활성화
			// 메모리가 없으면 .add를 비활성화합니다 (효과가 없기 때문에).
			// 보류중인 실행을 중단합니다.
			잠금 : function () {
				잠김 = 대기열 = [];
				if (! memory &&! firing) {
					목록 = 메모리 = "";
				}
				이것을 반환하십시오;
			},
			잠김 : function () {
				반환 !! 잠김;
			},

			// 주어진 컨텍스트와 인수로 모든 콜백을 호출합니다.
			fireWith : function (context, args) {
				if (! locked) {
					args = args || [];
					args = [컨텍스트, args.slice? args.slice () : args];
					queue.push (args);
					if (! firing) {
						불();
					}
				}
				이것을 반환하십시오;
			},

			// 주어진 인수로 모든 콜백 호출
			화재 : function () {
				self.fireWith (this, arguments);
				이것을 반환하십시오;
			},

			// 콜백이 이미 한 번 이상 호출되었는지 확인
			해고 됨 : function () {
				반환 !! 해고;
			}
		};

	자기 반환;
};


function Identity (v) {
	반환 v;
}
function Thrower (ex) {
	전 던져;
}

function adaptValue (value, resolve, reject, noValue) {
	var 메서드;

	{

		// 권한 동기 동작에 대한 약속 측면을 먼저 확인합니다.
		if (value && isFunction ((method = value.promise))) {
			method.call (value) .done (resolve) .fail (reject);

		// 다른 thenables
		} else if (value && isFunction ((method = value.then))) {
			method.call (값, 해결, 거부);

		// 기타 비 테너 블
		} else {

			// Array # slice가 부울`noValue`를 정수로 캐스팅하도록하여`resolve` 인수를 제어합니다.
			// * false : [value] .slice (0) => resolve (value)
			// * true : [value] .slice (1) => resolve ()
			resolve.apply (undefined, [value] .slice (noValue));
		}

	// Promises / A +의 경우 예외를 거부로 변환
	// jQuery.when은 thenables를 언 래핑하지 않기 때문에 추가 검사를 건너 뛸 수 있습니다.
	// Deferred # 그런 다음 조건부로 거부를 억제합니다.
	} catch (value) {

		// 지원 : Android 4.0 만
		// .call / .apply없이 호출되는 엄격한 모드 함수는 전역 객체 컨텍스트를 가져옵니다.
		reject.apply (정의되지 않음, [값]);
	}
}

jQuery.extend ({

	지연됨 : function (func) {
		var tuples = [

				// 액션, 리스너 추가, 콜백,
				// .... 처리기, 인수 색인, [최종 상태]
				[ "알림", "진행", jQuery.Callbacks ( "memory"),
					jQuery.Callbacks ( "memory"), 2],
				[ "resolve", "done", jQuery.Callbacks ( "once memory"),
					jQuery.Callbacks ( "일회 메모리"), 0, "해결됨"],
				[ "거부", "실패", jQuery.Callbacks ( "일회 메모리"),
					jQuery.Callbacks ( "일회 메모리"), 1, "거부 됨"]
			],
			상태 = "보류 중",
			약속 = {
				상태 : function () {
					반환 상태;
				},
				항상 : function () {
					deferred.done (arguments) .fail (arguments);
					이것을 반환하십시오;
				},
				"catch": function (fn) {
					return promise.then (null, fn);
				},

				// 역 호환을 위해 파이프 유지
				파이프 : function (/ * fnDone, fnFail, fnProgress * /) {
					var fns = 인수;

					return jQuery.Deferred (function (newDefer) {
						jQuery.each (tuples, function (_i, tuple) {

							// 튜플 (progress, done, fail)을 인수 (done, fail, progress)에 매핑
							var fn = isFunction (fns [tuple [4]]) && fns [tuple [4]];

							// deferred.progress (function () {newDefer 또는 newDefer.notify에 바인딩})
							// deferred.done (function () {newDefer 또는 newDefer.resolve에 바인딩})
							// deferred.fail (function () {newDefer 또는 newDefer.reject에 바인딩})
							deferred [tuple [1]] (function () {
								var return = fn && fn.apply (this, arguments);
								if (return && isFunction (returned.promise)) {
									return.promise ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} else {
									newDefer [tuple [0] + "With"] (
										이,
										fn? [반환 됨] : 인수
									);
								}
							});
						});
						fns = null;
					}) .promise ();
				},
				그때 : function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve (depth, deferred, handler, special) {
						return function () {
							var that = this,
								args = 인수,
								mightThrow = function () {
									var가 반환되었습니다.

									// 지원 : Promises / A + 섹션 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// 이중 해상도 시도 무시
									if (깊이 <maxDepth) {
										반환;
									}

									return = handler.apply (that, args);

									// 지원 : Promises / A + 섹션 2.3.1
									// https://promisesaplus.com/#point-48
									if (return === deferred.promise ()) {
										throw new TypeError ( "Thenable self-resolution");
									}

									// 지원 : Promises / A + 섹션 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									//`then`을 한 번만 검색
									then = 반환 &&

										// 지원 : Promises / A + 섹션 2.3.4
										// https://promisesaplus.com/#point-64
										// 객체와 함수 만 확인 가능
										(반환 된 유형 === "개체"||
											반환 된 typeof === "함수") &&
										return.then;

									// 반환 된 thenable 처리
									if (isFunction (then)) {

										// 특수 프로세서 (알림)는 해결을 기다립니다.
										if (특수) {
											then.call (
												반환,
												resolve (maxDepth, deferred, Identity, special),
												resolve (maxDepth, deferred, Thrower, special)
											);

										// 일반 프로세서 (해결)도 진행 중입니다.
										} else {

											// ... 이전 해상도 값 무시
											maxDepth ++;

											then.call (
												반환,
												resolve (maxDepth, deferred, Identity, special),
												resolve (maxDepth, deferred, Thrower, special),
												resolve (maxDepth, 지연, ID,
													deferred.notifyWith)
											);
										}

									// 다른 모든 반환 값 처리
									} else {

										// 대체 핸들러 만 컨텍스트를 전달합니다.
										// 및 여러 값 (비 사양 동작)
										if (handler! == Identity) {
											that = 정의되지 않음;
											args = [반환 됨];
										}

										// 값 처리
										// 기본 프로세스는 해결입니다.
										(특별 || deferred.resolveWith) (that, args);
									}
								},

								// 일반 프로세서 (해결) 만 예외 포착 및 거부
								프로세스 = 특별?
									mightThrow :
									함수() {
										{
											mightThrow ();
										} catch (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// 지원 : Promises / A + 섹션 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// 해결 후 예외 무시
											if (깊이 + 1> = maxDepth) {

												// 대체 핸들러 만 컨텍스트를 전달합니다.
												// 및 여러 값 (비 사양 동작)
												if (핸들러! == Thrower) {
													that = 정의되지 않음;
													args = [e];
												}

												deferred.rejectWith (that, args);
											}
										}
									};

							// 지원 : Promises / A + 섹션 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// 거짓 거부를 피하기 위해 즉시 약속을 다시 해결합니다.
							// 후속 오류
							if (깊이) {
								방법();
							} else {

								// 예외가 발생하는 경우 선택적 후크를 호출하여 스택을 기록합니다.
								// 실행이 비동기 화되면 손실되므로
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (프로세스);
							}
						};
					}

					return jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						튜플 [0] [3] .add (
							결의(
								0,
								newDefer,
								isFunction (onProgress)?
									onProgress :
									정체,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add (...)
						튜플 [1] [3] .add (
							결의(
								0,
								newDefer,
								isFunction (onFulfilled)?
									onFulfilled :
									정체
							)
						);

						// rejected_handlers.add (...)
						튜플 [2] [3] .add (
							결의(
								0,
								newDefer,
								isFunction (onRejected)?
									onRejected :
									던지는 사람
							)
						);
					}) .promise ();
				},

				//이 지연에 대한 약속 받기
				// obj가 제공되면 promise 측면이 객체에 추가됩니다.
				약속 : function (obj) {
					return obj! = null? jQuery.extend (obj, promise) : promise;
				}
			},
			지연됨 = {};

		// 목록 별 메서드 추가
		jQuery.each (tuples, function (i, tuple) {
			var list = tuple [2],
				stateString = 튜플 [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise [tuple [1]] = list.add;

			// 핸들 상태
			if (stateString) {
				list.add (
					함수() {

						// 상태 = "해결됨"(즉, 이행 됨)
						// 상태 = "거부 됨"
						상태 = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					튜플 [3-i] [2] .disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					튜플 [3-i] [3] .disable,

					// progress_callbacks.lock
					튜플 [0] [2] .lock,

					// progress_handlers.lock
					튜플 [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add (tuple [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			deferred [tuple [0]] = function () {
				deferred [tuple [0] + "With"] (this === deferred? undefined : this, arguments);
				이것을 반환하십시오;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred [tuple [0] + "With"] = list.fireWith;
		});

		// 지연된 약속을
		promise.promise (지연);

		// 주어진 func를 호출합니다.
		if (func) {
			func.call (지연됨, 지연됨);
		}

		// 완료되었습니다!
		지연된 반환;
	},

	// 지연된 도우미
	언제 : function (singleValue) {
		var

			// 완료되지 않은 부하의 수
			나머지 = arguments.length,

			// 처리되지 않은 인수 수
			i = 남음,

			// 하위 이행 데이터
			resolveContexts = Array (i),
			resolveValues ​​= slice.call (인수),

			// 지연된 마스터
			마스터 = jQuery.Deferred (),

			// 하위 콜백 팩토리
			updateFunc = function (i) {
				return function (value) {
					resolveContexts [i] = 이것;
					resolveValues ​​[i] = arguments.length> 1? slice.call (arguments) : 값;
					if (! (--remaining)) {
						master.resolveWith (resolveContexts, resolveValues);
					}
				};
			};

		// 단일 및 빈 인수는 Promise.resolve와 같이 채택됩니다.
		if (잔여 <= 1) {
			acceptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				! 남은);

			// .then ()을 사용하여 보조 thenables를 풀기 (cf. gh-3000)
			if (master.state () === "보류 중"||
				isFunction (resolveValues ​​[i] && resolveValues ​​[i] .then)) {

				return master.then ();
			}
		}

		// Promise.all 배열 요소처럼 여러 인수가 집계됩니다.
		while (i--) {
			acceptValue (resolveValues ​​[i], updateFunc (i), master.reject);
		}

		return master.promise ();
	}
});


// 일반적으로 개발 중 프로그래머의 실수를 나타냅니다.
// 기본적으로 삼키는 대신 최대한 빨리 경고합니다.
var rerrorNames = / ^ (Eval | Internal | Range | Reference | Syntax | Type | URI) Error $ /;

jQuery.Deferred.exceptionHook = function (error, stack) {

	// 지원 : IE 8-9 만
	// 콘솔은 개발 도구가 열려있을 때 존재하며 언제든지 발생할 수 있습니다.
	if (window.console && window.console.warn && 오류 && rerrorNames.test (error.name)) {
		window.console.warn ( "jQuery.Deferred 예외 :"+ error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		오류 발생;
	});
};




// DOM 준비에서 사용되는 지연
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	readyList
		.then (fn)

		// jQuery.readyException을 함수에 래핑하여
		// 콜백 대신 오류 처리시 발생
		// 등록.
		.catch (function (error) {
			jQuery.readyException (오류);
		});

	이것을 반환하십시오;
};

jQuery.extend ({

	// DOM을 사용할 준비가 되었습니까? 발생하면 true로 설정하십시오.
	isReady : 거짓,

	// 이전에 기다려야하는 항목 수를 추적하는 카운터
	// ready 이벤트가 발생합니다. # 6781 참조
	readyWait : 1,

	// DOM이 준비되었을 때 처리
	준비 : function (wait) {

		// 보류중인 보류가 있거나 이미 준비된 경우 중단
		if (wait === true? --jQuery.readyWait : jQuery.isReady) {
			반환;
		}

		// DOM이 준비되었음을 기억하십시오.
		jQuery.isReady = true;

		// 정상적인 DOM Ready 이벤트가 발생하면 감소하고 필요한 경우 기다립니다.
		if (wait! == true && --jQuery.readyWait> 0) {
			반환;
		}

		// 바인딩 된 함수가 있으면 실행
		readyList.resolveWith (문서, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// 준비된 이벤트 핸들러 및 자체 정리 방법
function completed () {
	document.removeEventListener ( "DOMContentLoaded", completed);
	window.removeEventListener ( "load", completed);
	jQuery.ready ();
}

// $ (document) .ready ()가 호출 된 케이스를 잡습니다.
// 브라우저 이벤트가 이미 발생한 후.
// 지원 : IE <= 9-10 만
// 이전 IE는 때때로 너무 빨리 "대화 형"신호를 보냅니다.
if (document.readyState === "완료"||
	(document.readyState! == "로드 중"&&! document.documentElement.doScroll)) {

	// 스크립트가 준비를 지연 할 수 있도록 비동기 적으로 처리합니다.
	window.setTimeout (jQuery.ready);

} else {

	// 편리한 이벤트 콜백 사용
	document.addEventListener ( "DOMContentLoaded", 완료 됨);

	// 항상 작동하는 window.onload 로의 폴백
	window.addEventListener ( "load", completed);
}




// 컬렉션의 값을 가져오고 설정하는 다기능 메서드
// 함수 인 경우 값을 선택적으로 실행할 수 있습니다.
var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		대량 = 키 == null;

	// 많은 값 설정
	if (toType (key) === "object") {
		chainable = true;
		for (i in key) {
			access (elems, fn, i, key [i], true, emptyGet, raw);
		}

	// 하나의 값을 설정합니다.
	} else if (value! == undefined) {
		chainable = true;

		if (! isFunction (value)) {
			raw = true;
		}

		if (bulk) {

			// 전체 세트에 대해 대량 작업 실행
			if (raw) {
				fn.call (elems, 값);
				fn = null;

			// ... 함수 값을 실행할 때 제외
			} else {
				벌크 = fn;
				fn = function (elem, _key, value) {
					return bulk.call (jQuery (elem), value);
				};
			}
		}

		if (fn) {
			for (; i <len; i ++) {
				fn (
					elems [i], 키, 원시?
					값 :
					value.call (elems [i], i, fn (elems [i], key))
				);
			}
		}
	}

	if (chainable) {
		elems 반환;
	}

	// 가져 오기
	if (bulk) {
		return fn.call (elems);
	}

	반환 len? fn (elems [0], key) : emptyGet;
};


// camelizing을 위해 점선 문자열과 일치
var rmsPrefix = / ^-ms- /,
	rdashAlpha = /-([az]) / g;

// camelCase에서 replace ()에 대한 콜백으로 사용
function fcamelCase (_all, letter) {
	return letter.toUpperCase ();
}

// 대시를 camelCase로 변환합니다. CSS 및 데이터 모듈에서 사용
// 지원 : IE <= 9-11, Edge 12-15
// Microsoft는 공급 업체 접두사를 고치는 것을 잊었습니다 (# 9572).
function camelCase (string) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = function (owner) {

	// 다음 만 허용 :
	//-노드
	//-Node.ELEMENT_NODE
	//-Node.DOCUMENT_NODE
	//-객체
	//-모두
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




function Data () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	캐시 : function (owner) {

		// 소유자 객체에 이미 캐시가 있는지 확인
		var value = owner [this.expando];

		// 그렇지 않은 경우 새로 만듭니다.
		if (! 값) {
			값 = {};

			// 최신 브라우저에서 요소가 아닌 노드에 대한 데이터를받을 수 있습니다.
			//하지만 안됩니다. # 8335를 참조하세요.
			// 항상 빈 객체를 반환합니다.
			if (acceptData (소유자)) {

				// 문자열 화되거나 반복 될 가능성이없는 노드 인 경우
				// 일반 할당 사용
				if (owner.nodeType) {
					소유자 [this.expando] = 값;

				// 그렇지 않으면 열거 할 수없는 속성으로 보호합니다.
				// configurable은 true 여야 속성이
				// 데이터가 제거되면 삭제됩니다.
				} else {
					Object.defineProperty (소유자, this.expando, {
						값 : 값,
						구성 가능 : true
					});
				}
			}
		}

		반환 값;
	},
	set : function (owner, data, value) {
		var 소품,
			cache = this.cache (소유자);

		// 핸들 : [소유자, 키, 값] args
		// 항상 camelCase 키 (gh-2257) 사용
		if (데이터 유형 === "문자열") {
			cache [camelCase (데이터)] = 값;

		// 핸들 : [owner, {properties}] args
		} else {

			// 속성을 캐시 개체에 하나씩 복사합니다.
			for (데이터의 소품) {
				cache [camelCase (prop)] = data [prop];
			}
		}
		반환 캐시;
	},
	get : function (owner, key) {
		return key === undefined?
			this.cache (소유자) :

			// 항상 camelCase 키 (gh-2257) 사용
			소유자 [this.expando] && 소유자 [this.expando] [camelCase (key)];
	},
	액세스 : function (owner, key, value) {

		// 다음 중 하나 인 경우 :
		//
		// 1. 키가 지정되지 않았습니다.
		// 2. 문자열 키가 지정되었지만 제공된 값이 없습니다.
		//
		// "읽기"경로를 가져 와서 get 메소드가
		// 반환 할 값은 다음 중 하나입니다.
		//
		// 1. 전체 캐시 객체
		// 2. 키에 저장된 데이터
		//
		if (키 === 정의되지 않음 ||
				((키 && 키 유형 === "문자열") && 값 === 정의되지 않음)) {

			return this.get (owner, key);
		}

		// 키가 문자열이 아니거나 키와 값이 아닌 경우
		// 다음 중 하나로 지정, 설정 또는 확장 (기존 객체)합니다.
		//
		// 1. 속성의 객체
		// 2. 키와 값
		//
		this.set (소유자, 키, 값);

		// "set"경로는 두 개의 가능한 진입 점을 가질 수 있기 때문에
		// 어떤 경로를 택했는지에 따라 예상 데이터를 반환 [*]
		반환 값! == undefined? 값 : 키;
	},
	제거 : function (owner, key) {
		var i,
			캐시 = 소유자 [this.expando];

		if (캐시 === 정의되지 않음) {
			반환;
		}

		if (key! == undefined) {

			// 배열 또는 공백으로 구분 된 키 문자열 지원
			if (Array.isArray (key)) {

				// 키가 키 배열 인 경우 ...
				// 우리는 항상 camelCase 키를 설정하므로 제거합니다.
				key = key.map (camelCase);
			} else {
				key = camelCase (key);

				// 공백이있는 키가 있으면 사용합니다.
				// 그렇지 않으면 공백이 아닌 것과 일치하여 배열을 만듭니다.
				키 = 캐시의 키?
					[키] :
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			while (i--) {
				캐시 삭제 [키 [i]];
			}
		}

		// 데이터가 더 이상 없으면 확장을 제거합니다.
		if (key === undefined || jQuery.isEmptyObject (cache)) {

			// 지원 : Chrome <= 35-45
			// 속성을 삭제할 때 Webkit 및 Blink 성능이 저하됩니다.
			// DOM 노드에서, 대신 undefined로 설정
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (버그 제한)
			if (owner.nodeType) {
				owner [this.expando] = 정의되지 않음;
			} else {
				소유자 삭제 [this.expando];
			}
		}
	},
	hasData : function (owner) {
		var cache = owner [this.expando];
		반환 캐시! == 정의되지 않음 &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = new Data ();

var dataUser = new Data ();



// 구현 요약
//
// 1. 1.9.x 브랜치와 API 표면 및 의미 론적 호환성 강화
// 2. 저장 공간을 줄여 모듈의 유지 보수성을 향상시킵니다.
// 단일 메커니즘에 대한 경로.
// 3. 동일한 단일 메커니즘을 사용하여 "개인"및 "사용자"데이터를 지원합니다.
// 4. _Never_ "개인"데이터를 사용자 코드에 노출 (TODO : Drop _data, _removeData)
// 5. 사용자 개체 (예 : expando 속성)에 대한 구현 세부 정보를 노출하지 않습니다.
// 6. 2014 년 WeakMap으로의 구현 업그레이드를위한 명확한 경로 제공

var rbrace = / ^ (? : \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

function getData (data) {
	if (data === "true") {
		true를 반환하십시오.
	}

	if (data === "false") {
		거짓 반환;
	}

	if (데이터 === "null") {
		null을 반환합니다.
	}

	// 문자열을 변경하지 않는 경우에만 숫자로 변환
	if (데이터 === + 데이터 + "") {
		return + data;
	}

	if (rbrace.test (데이터)) {
		return JSON.parse (data);
	}

	반환 데이터;
}

function dataAttr (elem, key, data) {
	var 이름;

	// 내부적으로 아무것도 발견되지 않으면 가져 오기를 시도합니다.
	// HTML5 data- * 속성의 데이터
	if (데이터 === 정의되지 않음 && elem.nodeType === 1) {
		name = "data-"+ key.replace (rmultiDash, "-$ &") .toLowerCase ();
		데이터 = elem.getAttribute (이름);

		if (데이터 유형 === "문자열") {
			{
				데이터 = getData (데이터);
			} catch (e) {}

			// 나중에 변경되지 않도록 데이터를 설정했는지 확인합니다.
			dataUser.set (elem, key, data);
		} else {
			데이터 = 정의되지 않음;
		}
	}
	반환 데이터;
}

jQuery.extend ({
	hasData : function (elem) {
		return dataUser.hasData (elem) || dataPriv.hasData (elem);
	},

	데이터 : function (elem, name, data) {
		return dataUser.access (elem, name, data);
	},

	removeData : function (elem, name) {
		dataUser.remove (elem, name);
	},

	// TODO : 이제 _data 및 _removeData에 대한 모든 호출이 대체되었습니다.
	// dataPriv 메서드를 직접 호출하면 더 이상 사용되지 않을 수 있습니다.
	_data : function (elem, name, data) {
		return dataPriv.access (elem, name, data);
	},

	_removeData : function (elem, name) {
		dataPriv.remove (elem, name);
	}
});

jQuery.fn.extend ({
	데이터 : function (key, value) {
		var i, 이름, 데이터,
			elem = this [0],
			attrs = elem && elem.attributes;

		// 모든 값을 가져옵니다.
		if (key === undefined) {
			if (this.length) {
				데이터 = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					while (i--) {

						// 지원 : IE 11 만
						// attrs 요소는 null 일 수 있습니다 (# 14894).
						if (attrs [i]) {
							이름 = attrs [i] .name;
							if (name.indexOf ( "data-") === 0) {
								이름 = camelCase (name.slice (5));
								dataAttr (elem, 이름, 데이터 [이름]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", true);
				}
			}

			반환 데이터;
		}

		// 여러 값 설정
		if (typeof key === "object") {
			return this.each (function () {
				dataUser.set (this, key);
			});
		}

		return access (this, function (value) {
			var data;

			// 호출하는 jQuery 객체 (요소 일치)가 비어 있지 않습니다.
			// (따라서 this [0]에 요소가 나타남) 및
			//`value` 매개 변수가 정의되지 않았습니다. 빈 jQuery 객체
			// elem = this [0]에 대해 ʻundefined`가됩니다.
			// 데이터 캐시를 읽으려고하면 예외가 발생합니다.
			if (elem && value === undefined) {

				// 캐시에서 데이터 가져 오기 시도
				// 키는 항상 데이터에 camelCased입니다.
				data = dataUser.get (elem, key);
				if (data! == undefined) {
					반환 데이터;
				}

				// 데이터 "검색"시도
				// HTML5 맞춤 데이터-* 속성
				데이터 = dataAttr (elem, key);
				if (data! == undefined) {
					반환 데이터;
				}

				// 정말 열심히 노력했지만 데이터가 존재하지 않습니다.
				반환;
			}

			// 데이터 설정 ...
			this.each (function () {

				// 우리는 항상 camelCased 키를 저장합니다.
				dataUser.set (this, key, value);
			});
		}, null, 값, arguments.length> 1, null, true);
	},

	removeData : function (key) {
		return this.each (function () {
			dataUser.remove (this, key);
		});
	}
});


jQuery.extend ({
	큐 : function (elem, type, data) {
		var 대기열;

		if (elem) {
			type = (type || "fx") + "queue";
			queue = dataPriv.get (elem, type);

			// 조회 일 뿐이라면 빠르게 빠져 나가 대기열에서 빼기 속도를 높입니다.
			if (데이터) {
				if (! queue || Array.isArray (data)) {
					queue = dataPriv.access (elem, type, jQuery.makeArray (data));
				} else {
					queue.push (데이터);
				}
			}
			리턴 큐 || [];
		}
	},

	대기열에서 빼기 : function (elem, type) {
		유형 = 유형 || "fx";

		var queue = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, type),
			다음 = function () {
				jQuery.dequeue (elem, type);
			};

		// fx 큐가 대기열에서 제외되면 항상 진행 상태를 제거합니다.
		if (fn === "진행 중") {
			fn = queue.shift ();
			startLength--;
		}

		if (fn) {

			// fx 대기열이 발생하지 않도록 진행률 센티널을 추가합니다.
			// 자동으로 대기열에서 제외
			if (type === "fx") {
				queue.unshift ( "진행 중");
			}

			// 마지막 대기열 중지 기능을 지 웁니다.
			hooks.stop 삭제;
			fn.call (elem, next, hooks);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	},

	// Not public-queueHooks 객체를 생성하거나 현재 객체를 반환합니다.
	_queueHooks : function (elem, type) {
		var key = type + "queueHooks";
		return dataPriv.get (elem, key) || dataPriv.access (elem, key, {
			비어 있음 : jQuery.Callbacks ( "once memory") .add (function () {
				dataPriv.remove (elem, [type + "queue", key]);
			})
		});
	}
});

jQuery.fn.extend ({
	큐 : function (type, data) {
		var setter = 2;

		if (typeof type! == "문자열") {
			데이터 = 유형;
			유형 = "fx";
			세터--;
		}

		if (arguments.length <setter) {
			return jQuery.queue (this [0], type);
		}

		반환 데이터 === undefined?
			이 :
			this.each (function () {
				var queue = jQuery.queue (this, type, data);

				//이 큐에 대한 후크 확인
				jQuery._queueHooks (this, type);

				if (type === "fx"&& queue [0]! == "inprogress") {
					jQuery.dequeue (this, type);
				}
			});
	},
	대기열에서 빼기 : function (type) {
		return this.each (function () {
			jQuery.dequeue (this, type);
		});
	},
	clearQueue : 함수 (유형) {
		return this.queue (type || "fx", []);
	},

	// 특정 유형의 대기열이있을 때 해결 된 promise를 가져옵니다.
	// 비어 있음 (fx는 기본적으로 유형 임)
	약속 : function (type, obj) {
		var tmp,
			카운트 = 1,
			defer = jQuery.Deferred (),
			요소 =이,
			i = this.length,
			resolve = function () {
				if (! (--count)) {
					defer.resolveWith (요소, [요소]);
				}
			};

		if (typeof type! == "문자열") {
			obj = 유형;
			유형 = 정의되지 않음;
		}
		유형 = 유형 || "fx";

		while (i--) {
			tmp = dataPriv.get (elements [i], type + "queueHooks");
			if (tmp && tmp.empty) {
				count ++;
				tmp.empty.add (해결);
			}
		}
		결의();
		return defer.promise (obj);
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/) .source;

var rcssNum = new RegExp ( "^ (? : ([+-]) = |) ("+ pnum + ") ([az %] *) $", "i");


var cssExpand = [ "위쪽", "오른쪽", "아래쪽", "왼쪽"];

var documentElement = document.documentElement;



	var isAttached = function (elem) {
			return jQuery.contains (elem.ownerDocument, elem);
		},
		구성됨 = {구성됨 : 참};

	// 지원 : IE 9-11 +, Edge 12-18 +, iOS 10.0-10.2 만
	// 가능한 경우 Shadow DOM 경계를 가로 질러 부착을 확인합니다 (gh-3504).
	// 지원 : iOS 10.0-10.2 만
	// 초기 iOS 10 버전은 ʻattachShadow`를 지원하지만`getRootNode`는 지원하지 않습니다.
	// 오류가 발생합니다. `getRootNode`를 확인해야합니다.
	if (documentElement.getRootNode) {
		isAttached = function (elem) {
			return jQuery.contains (elem.ownerDocument, elem) ||
				elem.getRootNode (구성) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree는 jQuery # filter 함수에서 호출 될 수 있습니다.
		//이 경우 요소는 두 번째 인수가됩니다.
		elem = el || elem;

		// 인라인 스타일이 모두를 능가합니다.
		return elem.style.display === "없음"||
			elem.style.display === ""&&

			// 그렇지 않으면 계산 된 스타일 확인
			// 지원 : Firefox <= 43-45
			// 연결 해제 된 요소는 계산 된 디스플레이를 가질 수 있습니다. 없음, 먼저 elem이
			// 문서에서.
			isAttached (elem) &&

			jQuery.css (elem, "디스플레이") === "없음";
	};



function adjustCSS (elem, prop, valueParts, tween) {
	var 조정, 스케일,
		maxIterations = 20,
		currentValue = 트윈?
			함수() {
				return tween.cur ();
			} :
			함수() {
				return jQuery.css (elem, prop, "");
			},
		초기 = currentValue (),
		단위 = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// 잠재적 인 단위 불일치에 대해 시작 값 계산이 필요합니다.
		initialInUnit = elem.nodeType &&
			(jQuery.cssNumber [prop] || unit! == "px"&& + initial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unit) {

		// 지원 : Firefox <= 54
		// CSS 상한 (gh-2144)의 간섭을 방지하기 위해 반복 대상 값을 반으로 줄입니다.
		초기 = 초기 / 2;

		// jQuery.css에서보고 한 신뢰 단위
		단위 = 단위 || initialInUnit [3];

		// 0이 아닌 시작점에서 반복적으로 근사
		initialInUnit = + 초기 || 1;

		while (maxIterations--) {

			// 최선의 추측을 평가하고 업데이트합니다 (두 배로 추측하면 0이됩니다).
			// 스케일이 1과 같거나 교차하면 완료합니다 (오래된 * 새 제품이 양수가 아님).
			jQuery.style (elem, prop, initialInUnit + unit);
			if ((1-scale) * (1-(scale = currentValue () / initial || 0.5)) <= 0) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / 스케일;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unit);

		// 나중에 트윈 속성을 업데이트해야합니다.
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + 초기 || 0;

		// 지정된 경우 상대 오프셋 (+ = /-=) 적용
		조정 됨 = valueParts [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2] :
			+ valueParts [2];
		if (트윈) {
			tween.unit = 단위;
			tween.start = initialInUnit;
			tween.end = 조정 됨;
		}
	}
	조정 된 수익;
}


var defaultDisplayMap = {};

function getDefaultDisplay (elem) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [nodeName];

	if (디스플레이) {
		반환 디스플레이;
	}

	temp = doc.body.appendChild (doc.createElement (nodeName));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	if (display === "none") {
		디스플레이 = "차단";
	}
	defaultDisplayMap [nodeName] = 디스플레이;

	반환 디스플레이;
}

function showHide (elements, show) {
	var display, elem,
		값 = [],
		인덱스 = 0,
		길이 = elements.length;

	// 변경해야하는 요소의 새 표시 값 결정
	for (; 색인 <길이; 색인 ++) {
		elem = 요소 [색인];
		if (! elem.style) {
			계속하다;
		}

		디스플레이 = elem.style.display;
		if (show) {

			// 계단식 숨겨진 요소에 대한 가시성을 강제하기 때문에 즉각적이고 느린
			// 비어 있지 않은 표시 값 (둘 중 하나)이 없으면이 첫 번째 루프에서 확인이 필요합니다.
			// 인라인 또는 복원 예정)
			if (display === "none") {
				values ​​[index] = dataPriv.get (elem, "display") || 없는;
				if (! values ​​[index]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === ""&& isHiddenWithinTree (elem)) {
				값 [인덱스] = getDefaultDisplay (elem);
			}
		} else {
			if (display! == "none") {
				값 [인덱스] = "없음";

				// 덮어 쓰는 내용 기억
				dataPriv.set (elem, "display", display);
			}
		}
	}

	// 지속적인 리플 로우를 방지하기 위해 두 번째 루프의 요소 표시 설정
	for (index = 0; index <length; index ++) {
		if (values ​​[index]! = null) {
			요소 [색인] .style.display = 값 [색인];
		}
	}

	반환 요소;
}

jQuery.fn.extend ({
	표시 : function () {
		return showHide (this, true);
	},
	숨기기 : function () {
		return showHide (this);
	},
	토글 : function (state) {
		if (typeof state === "boolean") {
			반환 상태? this.show () : this.hide ();
		}

		return this.each (function () {
			if (isHiddenWithinTree (this)) {
				jQuery (this) .show ();
			} else {
				jQuery (this) .hide ();
			}
		});
	}
});
var rcheckableType = (/ ^ (?: checkbox | radio) $ / i);

var rtagName = (/ <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) / i);

var rscriptType = (/ ^ $ | ^ module $ | \ / (?: java | ecma) script / i);



( 함수() {
	var fragment = document.createDocumentFragment (),
		div = fragment.appendChild (document.createElement ( "div")),
		input = document.createElement ( "input");

	// 지원 : Android 4.0-4.3 전용
	// 이름이 설정되면 손실 된 상태 확인 (# 11217)
	// 지원 : WWA (Windows Web Apps)
	//`name` 및`type`은 WWA에 .setAttribute를 사용해야합니다 (# 14901).
	input.setAttribute ( "type", "radio");
	input.setAttribute ( "checked", "checked");
	input.setAttribute ( "이름", "t");

	div.a ppendChild (input);

	// 지원 : Android <= 4.1 전용
	// 이전 WebKit은 조각에서 확인 된 상태를 올바르게 복제하지 않습니다.
	support.checkClone = div.cloneNode (true) .cloneNode (true) .lastChild.checked;

	// 지원 : IE <= 11 만
	// textarea (및 확인란) defaultValue가 제대로 복제되었는지 확인합니다.
	div.innerHTML = "<textarea> x </ textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;

	// 지원 : IE <= 9 전용
	// IE <= 9는 외부에 삽입 될 때 <option> 태그를 해당 내용으로 바꿉니다.
	// 선택 요소.
	div.innerHTML = "<옵션> </ option>";
	support.option = !! div.lastChild;
}) ();


// XHTML을 지원하려면이 태그를 닫아야합니다 (# 13200).
var wrapMap = {

	// XHTML 파서는 마술처럼
	// 태그 수프 파서와 동일한 방식입니다. 그래서 우리는 단축 할 수 없습니다
	// <tbody> 또는 기타 필수 요소를 생략합니다.
	thead : [1, "<table>", "</ table>"],
	col : [2, "<table> <colgroup>", "</ colgroup> </ table>"],
	tr : [2, "<table> <tbody>", "</ tbody> </ table>"],
	td : [3, "<table> <tbody> <tr>", "</ tr> </ tbody> </ table>"],

	_default : [0, "", ""]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// 지원 : IE <= 9 전용
if (! support.option) {
	wrapMap.optgroup = wrapMap.option = [1, "<select multiple = 'multiple'>", "</ select>"];
}


function getAll (context, tag) {

	// 지원 : IE <= 9-11 전용
	// 호스트 개체에서 인수가없는 메서드 호출을 방지하려면 typeof 사용 (# 15151)
	var ret;

	if (typeof context.getElementsByTagName! == "undefined") {
		ret = context.getElementsByTagName (tag || "*");

	} else if (typeof context.querySelectorAll! == "undefined") {
		ret = context.querySelectorAll (tag || "*");

	} else {
		ret = [];
	}

	if (tag === undefined || tag && nodeName (context, tag)) {
		return jQuery.merge ([context], ret);
	}

	반환 ret;
}


// 이미 평가 된 것으로 스크립트 표시
function setGlobalEval (elems, refElements) {
	var i = 0,
		l = elems.length;

	for (; i <l; i ++) {
		dataPriv.set (
			elems [i],
			"globalEval",
			! refElements || dataPriv.get (refElements [i], "globalEval")
		);
	}
}


var rhtml = / <| & #? \ w +; /;

function buildFragment (elems, 컨텍스트, 스크립트, 선택, 무시 됨) {
	var elem, tmp, tag, wrap, attachment, j,
		조각 = context.createDocumentFragment (),
		노드 = [],
		나는 = 0,
		l = elems.length;

	for (; i <l; i ++) {
		elem = elems [i];

		if (elem || elem === 0) {

			// 직접 노드 추가
			if (toType (elem) === "객체") {

				// 지원 : Android <= 4.0 전용, PhantomJS 1 전용
				// push.apply (_, arraylike)는 고대 WebKit에서 발생합니다.
				jQuery.merge (노드, elem.nodeType? [elem] : elem);

			// 비 HTML을 텍스트 노드로 변환
			} else if (! rhtml.test (elem)) {
				nodes.push (context.createTextNode (elem));

			// html을 DOM 노드로 변환
			} else {
				tmp = tmp || fragment.appendChild (context.createElement ( "div"));

				// 표준 표현 역 직렬화
				tag = (rtagName.exec (elem) || [ "", ""]) [1] .toLowerCase ();
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter (elem) + wrap [2];

				// 래퍼를 통해 올바른 콘텐츠로 내려갑니다.
				j = 랩 [0];
				동안 (j--) {
					tmp = tmp.lastChild;
				}

				// 지원 : Android <= 4.0 전용, PhantomJS 1 전용
				// push.apply (_, arraylike)는 고대 WebKit에서 발생합니다.
				jQuery.merge (노드, tmp.childNodes);

				// 최상위 컨테이너 기억
				tmp = fragment.firstChild;

				// 생성 된 노드가 고아인지 확인 (# 12392)
				tmp.textContent = "";
			}
		}
	}

	// 조각에서 래퍼 제거
	fragment.textContent = "";

	나는 = 0;
	while ((elem = nodes [i ++])) {

		// 이미 컨텍스트 컬렉션에있는 요소 건너 뛰기 (trac-4087)
		if (selection && jQuery.inArray (elem, selection)> -1) {
			if (무시 됨) {
				무시 됨 .push (elem);
			}
			계속하다;
		}

		첨부 = isAttached (elem);

		// 조각에 추가
		tmp = getAll (fragment.appendChild (elem), "script");

		// 스크립트 평가 기록 보존
		if (첨부) {
			setGlobalEval (tmp);
		}

		// 실행 파일 캡처
		if (스크립트) {
			j = 0;
			while ((elem = tmp [j ++])) {
				if (rscriptType.test (elem.type || "")) {
					scripts.push (elem);
				}
			}
		}
	}

	반환 조각;
}


var
	rkeyEvent = / ^ key /,
	rmouseEvent = / ^ (?: 마우스 | 포인터 | 컨텍스트 메뉴 | 드래그 | 드롭) | 클릭 /,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue () {
	true를 반환하십시오.
}

function returnFalse () {
	거짓 반환;
}

// 지원 : IE <= 9-11 +
// focus () 및 blur ()는 작동하지 않는 경우를 제외하고는 비동기입니다.
// 따라서 요소가 이미 활성화되어있을 때 포커스가 동기화 될 것으로 예상합니다.
// 요소가 아직 활성화되지 않은 경우 동기화되도록 블러 처리합니다.
// (포커스와 블러는 지원되는 다른 브라우저에서 항상 동기화됩니다.
// 이것은 우리가 믿을 수있는시기를 정의합니다).
function expectSync (elem, type) {
	return (elem === safeActiveElement ()) === (type === "focus");
}

// 지원 : IE <= 9 전용
// document.activeElement에 액세스하면 예기치 않게 발생할 수 있습니다.
// https://bugs.jquery.com/ticket/13393
function safeActiveElement () {
	{
		return document.activeElement;
	} catch (err) {}
}

function on (elem, types, selector, data, fn, one) {
	var origFn, 유형;

	// 유형은 유형 / 핸들러의 맵일 수 있습니다.
	if (유형 유형 === "객체") {

		// (유형-객체, 선택기, 데이터)
		if (typeof 선택기! == "문자열") {

			// (유형-객체, 데이터)
			데이터 = 데이터 || 선택자;
			선택자 = 정의되지 않음;
		}
		for (type in types) {
			on (elem, 유형, 선택기, 데이터, 유형 [유형], 하나);
		}
		elem 반환;
	}

	if (데이터 == null && fn == null) {

		// (유형, fn)
		fn = 선택기;
		데이터 = 선택기 = 정의되지 않음;
	} else if (fn == null) {
		if (typeof 선택기 === "문자열") {

			// (유형, 선택기, fn)
			fn = 데이터;
			데이터 = 정의되지 않음;
		} else {

			// (유형, 데이터, fn)
			fn = 데이터;
			데이터 = 선택자;
			선택자 = 정의되지 않음;
		}
	}
	if (fn === false) {
		fn = returnFalse;
	} else if (! fn) {
		elem 반환;
	}

	if (one === 1) {
		origFn = fn;
		fn = function (이벤트) {

			// 이벤트에 정보가 포함되어 있으므로 빈 집합을 사용할 수 있습니다.
			jQuery (). off (이벤트);
			return origFn.apply (this, arguments);
		};

		// 호출자가 origFn을 사용하여 제거 할 수 있도록 동일한 GUID를 사용합니다.
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid ++);
	}
	return elem.each (function () {
		jQuery.event.add (this, types, fn, data, selector);
	});
}

/ *
 * 공개 인터페이스의 일부가 아닌 이벤트 관리를위한 도우미 기능.
 * 많은 아이디어에 대한 Dean Edwards의 addEvent 라이브러리에 소품.
 * /
jQuery.event = {

	글로벌 : {},

	추가 : function (elem, types, handler, data, selector) {

		var handleObjIn, eventHandle, tmp,
			이벤트, t, handleObj,
			특수, 핸들러, 유형, 네임 스페이스, origType,
			elemData = dataPriv.get (elem);

		// 데이터를받는 객체에만 이벤트를 첨부합니다.
		if (! acceptData (elem)) {
			반환;
		}

		// 호출자는 핸들러 대신 커스텀 데이터 객체를 전달할 수 있습니다.
		if (handler.handler) {
			handleObjIn = 핸들러;
			handler = handleObjIn.handler;
			선택기 = handleObjIn.selector;
		}

		// 연결시 유효하지 않은 선택자가 예외를 throw하는지 확인
		// elem이 요소가 아닌 노드 (예 : 문서) 인 경우 documentElement에 대해 평가합니다.
		if (선택기) {
			jQuery.find.matchesSelector (documentElement, selector);
		}

		// 나중에 찾기 / 제거하는 데 사용되는 고유 ID가 핸들러에 있는지 확인
		if (! handler.guid) {
			handler.guid = jQuery.guid ++;
		}

		// 이것이 첫 번째 인 경우 요소의 이벤트 구조와 메인 핸들러를 초기화합니다.
		if (! (이벤트 = elemData.events)) {
			이벤트 = elemData.events = Object.create (null);
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = function (e) {

				// jQuery.event.trigger ()의 두 번째 이벤트를 버리고
				// 페이지가 언로드 된 후 이벤트가 호출 될 때
				return typeof jQuery! == "undefined"&& jQuery.event.triggered! == e.type?
					jQuery.event.dispatch.apply (elem, arguments) : 정의되지 않음;
			};
		}

		// 공백으로 구분 된 여러 이벤트 처리
		유형 = (유형 || "") .match (rnothtmlwhite) || [ ""];
		t = 유형. 길이;
		동안 (t--) {
			tmp = rtypenamespace.exec (types [t]) || [];
			유형 = origType = tmp [1];
			네임 스페이스 = (tmp [2] || "") .split ( ".") .sort ();

			// * 반드시 * 유형이어야하며 네임 스페이스 전용 핸들러를 첨부하지 않습니다.
			if (! type) {
				계속하다;
			}

			// 이벤트 유형이 변경되면 변경된 유형에 대한 특수 이벤트 핸들러를 사용합니다.
			특수 = jQuery.event.special [유형] || {};

			// 선택자가 정의 된 경우 특수 이벤트 API 유형을 결정하고 그렇지 않으면 지정된 유형을 결정합니다.
			type = (선택자? special.delegateType : special.bindType) || 유형;

			// 새로 재설정 유형에 따라 특별 업데이트
			특수 = jQuery.event.special [유형] || {};

			// 모든 이벤트 핸들러에 handleObj가 전달됩니다.
			handleObj = jQuery.extend ({
				유형 : 유형,
				origType : origType,
				데이터 : 데이터,
				핸들러 : 핸들러,
				guid : handler.guid,
				선택기 : 선택기,
				needsContext : 선택자 && jQuery.expr.match.needsContext.test (선택자),
				네임 스페이스 : namespaces.join ( ".")
			}, handleObjIn);

			// 첫 번째 인 경우 이벤트 핸들러 큐 초기화
			if (! (핸들러 = 이벤트 [유형])) {
				핸들러 = 이벤트 [유형] = [];
				handlers.delegateCount = 0;

				// 특수 이벤트 핸들러가 false를 반환하는 경우에만 addEventListener 사용
				if (! special.setup ||
					special.setup.call (elem, 데이터, 네임 스페이스, eventHandle) === false) {

					if (elem.addEventListener) {
						elem.addEventListener (type, eventHandle);
					}
				}
			}

			if (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// 요소의 핸들러 목록에 추가합니다.
			if (선택기) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} else {
				handlers.push (handleObj);
			}

			// 이벤트 최적화를 위해 사용 된 이벤트를 추적합니다.
			jQuery.event.global [유형] = true;
		}

	},

	// 요소에서 이벤트 또는 이벤트 집합 분리
	제거 : function (elem, 유형, 핸들러, 선택기, mappingTypes) {

		var j, origCount, tmp,
			이벤트, t, handleObj,
			특수, 핸들러, 유형, 네임 스페이스, origType,
			elemData = dataPriv.hasData (elem) && dataPriv.get (elem);

		if (! elemData ||! (이벤트 = elemData.events)) {
			반환;
		}

		// 유형의 각 type.namespace에 대해 한 번; 유형은 생략 가능
		유형 = (유형 || "") .match (rnothtmlwhite) || [ ""];
		t = 유형. 길이;
		동안 (t--) {
			tmp = rtypenamespace.exec (types [t]) || [];
			유형 = origType = tmp [1];
			네임 스페이스 = (tmp [2] || "") .split ( ".") .sort ();

			// 요소에 대한 모든 이벤트 (제공된 경우이 네임 스페이스에서) 바인딩 해제
			if (! type) {
				for (이벤트 입력) {
					jQuery.event.remove (elem, 유형 + 유형 [t], 핸들러, 선택기, true);
				}
				계속하다;
			}

			특수 = jQuery.event.special [유형] || {};
			type = (선택자? special.delegateType : special.bindType) || 유형;
			핸들러 = 이벤트 [유형] || [];
			tmp = tmp [2] &&
				new RegExp ( "(^ | \\.)"+ namespaces.join ( "\\. (? :. * \\. |)") + "(\\. | $)");

			// 일치하는 이벤트 제거
			origCount = j = handlers.length;
			동안 (j--) {
				handleObj = 핸들러 [j];

				if ((mappingTypes || origType === handleObj.origType) &&
					(! handler || handler.guid === handleObj.guid) &&
					(! tmp || tmp.test (handleObj.namespace)) &&
					(! 선택기 || 선택기 === handleObj.selector ||
						선택기 === "**"&& handleObj.selector)) {
					handlers.splice (j, 1);

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// 무언가를 제거하고 더 이상 핸들러가없는 경우 일반 이벤트 핸들러를 제거합니다.
			// (특수 이벤트 핸들러를 제거하는 동안 무한 재귀 가능성을 방지합니다.)
			if (origCount &&! handlers.length) {
				if (! special.teardown ||
					special.teardown.call (elem, namespaces, elemData.handle) === false) {

					jQuery.removeEvent (elem, type, elemData.handle);
				}

				이벤트 삭제 [유형];
			}
		}

		// 더 이상 사용되지 않는 경우 데이터 및 확장을 제거합니다.
		if (jQuery.isEmptyObject (이벤트)) {
			dataPriv.remove (elem, "이벤트 처리");
		}
	},

	디스패치 : function (nativeEvent) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array (arguments.length),

			// 네이티브 이벤트 개체에서 쓰기 가능한 jQuery.Event 만들기
			이벤트 = jQuery.event.fix (nativeEvent),

			핸들러 = (
					dataPriv.get (this, "events") || Object.create (null)
				) [event.type] || [],
			스페셜 = jQuery.event.special [event.type] || {};

		// (읽기 전용) 네이티브 이벤트 대신 수정 된 jQuery.Event 사용
		args [0] = 이벤트;

		for (i = 1; i <arguments.length; i ++) {
			args [i] = 인수 [i];
		}

		event.delegateTarget =이;

		// 매핑 된 유형에 대한 preDispatch 후크를 호출하고 원하는 경우 보석금을 허용합니다.
		if (special.preDispatch && special.preDispatch.call (this, event) === false) {
			반환;
		}

		// 핸들러 결정
		handlerQueue = jQuery.event.handlers.call (this, event, handlers);

		// 먼저 대리자를 실행합니다. 그들은 우리 아래의 전파를 멈추고 싶어 할 것입니다.
		나는 = 0;
		while ((matched = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = matched.elem;

			j = 0;
			while ((handleObj = matched.handlers [j ++]) &&
				! event.isImmediatePropagationStopped ()) {

				// 이벤트가 네임 스페이스 인 경우 각 핸들러는 다음과 같은 경우에만 호출됩니다.
				// 특별히 보편적이거나 그 네임 스페이스는 이벤트의 상위 집합입니다.
				if (! event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}) .handle ||
						handleObj.handler) .apply (matched.elem, args);

					if (ret! == 정의되지 않음) {
						if ((event.result = ret) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// 매핑 된 유형에 대한 postDispatch 후크를 호출합니다.
		if (special.postDispatch) {
			special.postDispatch.call (this, event);
		}

		return event.result;
	},

	핸들러 : function (event, handlers) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// 델리게이트 핸들러 찾기
		if (delegateCount &&

			// 지원 : IE <= 9
			// 블랙홀 SVG <use> 인스턴스 트리 (trac-13180)
			cur.nodeType &&

			// 지원 : Firefox <= 42
			// 기본 포인터가 아닌 버튼을 나타내는 사양 위반 클릭 억제 (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// 지원 : IE 11 만
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );