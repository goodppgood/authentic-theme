/*!
 * Authentic Theme 18.31 (https://github.com/qooob/authentic-theme)
 * Copyright 2014-2017 Ilia Rostovtsev <programming@rostovtsev.ru>
 * Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
 */
;
var b = window,
    f = b.parent,
    a = f.document.getElementById("iframe"),
    with_frame = !(typeof f.NProgress == "object" ? 0 : 1),
    html = $("html"),
    r = $('link[href*="configserver"]'),
    empty = $("style");
html.attr("data-background-style", f.$("html").attr("data-background-style")).attr("data-module", "csf");
empty.empty();
r.remove();
$(function() {});

function csf_init() {
    function s(d) {
        return $("<div></div>").html(d).text()
    }(function(d) {
        d.fn.replaceTagName = function(U) {
            var T = [],
                S = this.length;
            while (S--) {
                var Q = document.createElement(U),
                    P = this[S],
                    V = P.attributes;
                for (var W = V.length - 1; W >= 0; W--) {
                    var R = V[W];
                    Q.setAttribute(R.name, R.value)
                }
                Q.innerHTML = P.innerHTML;
                d(P).after(Q).remove();
                T[S - 1] = Q
            }
            return d(T)
        }
    })(jQuery);
    (function(d) {
        d.fn.replaceText = function(g, P, Q) {
            return this.each(function() {
                var S = this.firstChild,
                    R, T, U = [];
                if (S) {
                    do {
                        if (S.nodeType === 3) {
                            R = S.nodeValue;
                            T = R.replace(g, P);
                            if (T !== R) {
                                if (!Q && /</.test(T)) {
                                    d(S).before(T);
                                    U.push(S)
                                } else {
                                    S.nodeValue = T
                                }
                            }
                        }
                    } while (S = S.nextSibling)
                }
                U.length && d(U).remove()
            })
        }
    })(jQuery);

    function w(d, P, g) {
        u.animate({
            opacity: 1
        }, P.$settings_animation_left_slide_time, function() {
            u.css("pointer-events", "auto").css("overflow", "auto")
        });
        g && P.__lre()
    }

    function x(Y, W) {
        var R = (((Y.attr("onclick") && Y.attr("onclick").indexOf("blank") !== -1) || (Y.parents("form").attr("target") && Y.parents("form").attr("target").indexOf("blank") !== -1)) ? true : false),
            g = Y.hasClass("heighter-28"),
            P = Y.css("height") == "28px",
            T = Y.hasClass("btn-lg"),
            S = 0,
            X = Y.find(".fa").hasClass("fa-1_25x"),
            Q = Y.find(".fa"),
            U = ((typeof W == "undefined" || W == false) ? false : W),
            V = '<span class="cspinner_container" style="position: absolute; width: 18px; height: 14px; display: inline-block;"><span class="cspinner" style="margin-top: ' + (U ? U[0] + "px" : (((g || P) && (!X && !T)) ? (-0.5 + S) + "px" : X ? "1.6px" : T ? "1.5px" : "0")) + " !important; margin-left: " + (U ? U[1] + "px" : (((g || P) && (!X && !T)) ? "-23.5px" : T ? "-28px" : (!g && !P && X) ? "-27.5px" : "-25.5px")) + ' !important;"><span class="cspinner-icon white ' + (U ? (U[2] ? U[2] : "") : (g || P ? "smaller" : "small")) + '"></span></span></span>',
            d = '<span class="cspinner_container" style="position: absolute; width: 18px; height: 14px; display: inline-block;"><span class="cspinner" style="margin-top: ' + (U ? U[0] + "px" : (((g || P) && (!X && !T)) ? (-0.5 + S) + "px" : X ? "1.6px" : T ? "1.5px" : "0")) + " !important; margin-left: " + (U ? U[1] + "px" : (((g || P) && (!X && !T)) ? "-23.5px" : T ? "-28px" : (!g && !P && X) ? "-27.5px" : "-25.5px")) + '  !important;"><span class="cspinner-icon dark ' + (U ? (U[2] ? U[2] : "") : (g || P ? "smaller" : "small")) + '"></span></span></span>';
        !R && Y.addClass("disabled");
        if (Q.length && !R) {
            if (Y.hasClass("btn-default")) {
                Q.addClass("invisible").after(d)
            } else {
                Q.addClass("invisible").after(V)
            }
        }
        if (U[3]) {
            setTimeout(function() {
                Y.removeClass("disabled");
                Q.removeClass("invisible");
                Y.find(".cspinner_container").remove()
            }, U[3])
        }
    }

    function m() {
        if ($('html[data-post="viewlogs"]').length) {
            setTimeout(function() {
                $.each($(".table.table-striped.table-condensed tbody tr"), function() {
                    var d = $(this);
                    targ = d.find('td[style*="nowrap"] button[type="button"]').attr("onclick");
                    __id = (targ ? parseInt(targ.match(/\d+/)[0]) : -1);
                    $.grep($__submenus__, function(g) {
                        if ($(g).attr("id") == ("s" + __id)) {
                            d.after($(g))
                        }
                    })
                })
            }, 100)
        }
    }
    typeof f.lang == "function" ? $is_lang = 1 : $is_lang = 0;
    if ($is_lang) {
        var N = {
            order: [],
            aaSorting: [],
            bDestroy: true,
            bPaginate: false,
            bInfo: false,
            destroy: true,
            oLanguage: {
                sEmptyTable: f.lang("theme_xhred_datatable_semptytable"),
                sInfo: f.lang("theme_xhred_datatable_sinfo"),
                sInfoEmpty: f.lang("theme_xhred_datatable_sinfoempty"),
                sLengthMenu: f.lang("theme_xhred_datatable_slengthmenu"),
                sLoadingRecords: f.lang("theme_xhred_datatable_sloadingrecords"),
                sProcessing: f.lang("theme_xhred_datatable_sprocessing"),
                sSearch: " ",
                sZeroRecords: f.lang("theme_xhred_datatable_szerorecords")
            },
            drawCallback: function(d) {
                m()
            }
        }
    } else {
        var N = {
            order: [],
            aaSorting: [],
            bDestroy: true,
            bPaginate: false,
            bInfo: false,
            destroy: true,
            drawCallback: function(d) {
                m()
            }
        }
    }

    function e(d, P) {
        if (v.find('textarea[name="formdata"]').length || !$("html[data-post]").attr("data-post")) {
            return
        }
        if (v.find('pre:not(:contains("<---"))').length) {
            var g = "log";
            setTimeout(function() {
                d && v.find("pre").css({
                    position: "initial",
                    left: "initial",
                    opacity: "0"
                });
                v.find("pre").each(function(S, R) {
                    var T = $(this),
                        Q = s(T.html());
                    T.empty();
                    window[g + "_" + S] = window.CodeMirror(this, {
                        value: Q,
                        lineNumbers: P,
                        mode: null,
                        theme: (with_frame ? f.settings_cm_view_palette : "monokai"),
                        readOnly: true,
                        viewportMargin: Infinity
                    });
                    d && window[g + "_" + S].setSize(null, ($(window).outerHeight() / 1.7))
                }).promise().done(function() {
                    if (d) {
                        v.find("pre").css({
                            position: "initial",
                            left: "initial"
                        });
                        setTimeout(function() {
                            v.find("pre").animate({
                                opacity: 1
                            }, f.$settings_animation_left_slide_time)
                        }, 10)
                    }
                    if (!d) {
                        var Q = ($("pre[style]").length == 1 ? 1.4 : 1.8);
                        $.each($("pre[style]"), function(S, R) {
                            var T = ($(window).outerHeight() / (Q * $("pre[style]").length)),
                                U = ($(this).find(".CodeMirror-code").find("pre").length * 17);
                            if (U > T) {
                                window[g + "_" + S].setSize(null, T)
                            } else {
                                window[g + "_" + S].setSize(null, U - 10)
                            }
                        })
                    }
                })
            }, 10)
        } else {
            v.find("pre").css({
                position: "initial",
                left: "initial"
            });
            v.find("pre").replaceText(/<---- /gi, "");
            v.find("pre").replaceText(/ ---->/gi, "")
        }
    }

    function q() {
        setTimeout(function() {
            v.find(".panel-heading").prepend('			<div class="btn-group pull-right" style="position: absolute; right: 15px; top: 17px;">			<a class="btn btn-link text-lighter btn-filter-top-right text-decoration-none pull-left" data-toggle="tooltip" data-title="' + ($is_lang ? f.lang("theme_xhred_datatable_filter_visible_tables") : "") + '" data-container="body">				<label style="font-weight: 400">					<input type="text" class="dataTable-mirror" placeholder="' + ($is_lang ? f.lang("theme_xhred_datatable_filter") : "") + '">				</label>				<i class="fa fa-filter"></i>			</a>			</div>		');
            var d = v.find(".dataTables_filter");
            d.hide();
            v.find(".btn-filter-top-right").click(function(g) {
                !$(g.target).is("input") && $(this).find("label").slideToggle(300, function() {
                    $(this).find("input").focus()
                })
            });
            v.find(".dataTable-mirror").keyup(function(g) {
                v.find(".dataTables_filter input").val($(this).val()).trigger("keyup");
                if ($.trim($(this).val()).length > 0) {
                    v.find(".btn-filter-top-right i").addClass("text-danger")
                } else {
                    v.find(".btn-filter-top-right i").removeClass("text-danger")
                }
            });
            v.find(".btn-filter-top-right input").blur(function(g) {
                $(this).parent("label").slideToggle(0)
            });
            v.on("keydown", function(Q) {
                if (f.$('aside input[name="search"]').is(":focus")) {
                    return
                }
                var P = Q.keyCode ? Q.keyCode : Q.which;
                if (!v.find("input").is(":focus") && !v.find("select").is(":focus") && !v.find("textarea").is(":focus") && !v.find(".modal.in").length) {
                    var g = String.fromCharCode(P).toLowerCase();
                    if (g && /[a-zA-Z0-9]/.test(g) && !Q.ctrlKey && !Q.altKey && !Q.metaKey && P !== 106 && P !== 107 && P !== 109 && P !== 112 && P !== 113 && P !== 114 && P !== 115 && P !== 116 && P !== 117 && P !== 118 && P !== 119 && P !== 120 && P !== 121 && P !== 122 && P !== 123) {
                        if (v.find(".dataTables_filter label input").length) {
                            v.find(".btn-filter-top-right").trigger("click");
                            v.find(".btn-filter-top-right .dataTable-mirror").focus().trigger("keyup")
                        }
                    }
                }
            })
        }, 0)
    }
    r = $('link[href*="configserver"], style, a#toplink, a#botlink, div#loader, a#webmintr2');
    r.remove();
    var n = (a !== null ? a.contentWindow : window);
    if (with_frame) {
        n.onbeforeunload = function(d) {
            f.__lrs()
        };
        $('body:not(".mobile-menu-toggler")').on("click", function(d) {
            if ($(d.target).is('a[data-toggle="tab"]')) {
                return
            }
            f.hide_mobile_menu()
        });
        $("#iframe").contents().find("body").on("keydown", function(d) {
            f.search_control(d);
            f.shortcut_control(d)
        });
        if (f.$("#open_webmin").length > 0 && f.$(".switch-toggle input:checked").attr("id") != "open_webmin" && f.$("body").data("dashboard") == "1") {
            f.t__s("open_webmin")
        }
        f.__cms();
        f.$('a[href="csf/"]').parent("li").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().prev("li").addClass("active")
    }
    var v = $("html"),
        u = $("body"),
        j = $("body .container-fluid"),
        E = $("html").attr("data-post"),
        A = $('pre:contains("csf:")').text().match(/((?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+))$/)[0] || "9.xx";
    u.addClass("csf");
    j.addClass("col-lg-10 col-lg-offset-1").wrapInner('<div class="panel panel-default">');
    v.find(".panel-default").wrapInner('<div class="panel-body">');
    v.find(".panel-default:first").css("border-top-width", "4px").prepend('<div class="panel-heading" style="text-align:center"><font size="+2">Firewall</font><span style="font-size:14px;display:block">ConfigServer Security & Firewall version ' + A + "</span></div>");
    v.find(".panel-heading + .panel-body > .panel:first").remove();
    v.find(".nav.nav-tabs").addClass("hidden");
    v.find('a[data-toggle="tab"][href="#other"]').parent("li").remove();
    v.find(".csf .nav.nav-tabs:hidden + .tab-content").attr("style", "margin-top: -10px !important");
    if (v.find('button[value="upgrade"]').length === 0) {
        $("#upgradetable").remove()
    }
    v.find('a[href$="/csf/changelog.txt"]').addClass("btn btn-xxs btn-default _btn-changelog").html('<i class="fa fa-info-circle"></i>Changelog');
    v.find("body table.table.table-bordered.table-striped").each(function() {
        $(this).addClass("table-condensed").removeClass("table-bordered").removeAttr("style")
    });
    v.find("a#MobileView").parent(".panel-body").parent(".panel-body").parent(".panel").remove();
    var F = 0;
    if (v.find(".mobilecontainer").length) {
        F = 1
    }
    v.find(".mobilecontainer").remove();
    typeof settings_allowed_hostname == "undefined" ? settings_allowed_hostname = true : false;
    var k = F ? v.find('.panel-heading:contains("Development Contribution")').parent().parent() : v.find('.panel-heading:contains("Development Contribution")').parent(),
        J = ($('link[rel="shortcut icon"]').data("hostname") == settings_allowed_hostname ? 1 : 0);
    if (E) {
        var O = v.find('br + pre:contains("csf:")');
        if (J) {
            O.prev("br").remove();
            O.next("p").remove();
            O.remove()
        } else {
            var t = O.next("p");
            O.remove();
            O.prev("br").remove();
            t.addClass("text-right footer-string")
        }
    } else {
        if (J) {
            if (F) {
                k.remove()
            } else {
                k.parent().find('br, br + pre:contains("csf:")').remove();
                k.parent().find("p").remove();
                k.remove()
            }
        } else {
            if (F) {
                k.find('br, br + pre:contains("csf:")').remove();
                k.find(".panel-info").removeClass("panel-info").addClass("panel-default text-center margined-top-10 _devcon");
                k.find("p").addClass("text-right footer-string")
            } else {
                k.parent().find('br, br + pre:contains("csf:")').remove();
                k.parent().find(".panel-info").removeClass("panel-info").addClass("panel-default text-center margined-top-10 _devcon");
                k.parent().find("p").addClass("text-right footer-string")
            }
        }
    }
    v.find('.csf select:not([name="backup"], [name="profile1"], [name="profile2"], [name="do"], [name="dur"]), .csf input:not([name="comment"], [name="ip"], [name="ports"], [name="timeout"], [aria-controls*="DataTables_Table_"])').addClass("heighter-34");
    var C = v.find('h4:contains("iptables logs*")');
    if (C.length) {
        $(".panel-body .pull-right").addClass("hidden");
        var z = C.next().next(".table.table-striped.table-condensed");
        C.addClass("col_header_custom big_big").attr("style", "border-bottom-color: transparent !important; background-color: #fafafa !important; line-height: 25px !important;");
        C.find("b").css("margin-left", "4px");
        z.attr("style", "margin-top: -8px !important");
        z.find("tbody tr:nth-child(2) td:first-child").css("min-width", "200px");
        $__submenus__ = $(".submenu").detach();
        setTimeout(function() {
            v.find(".panel-heading").prepend('			<div class="btn-group pull-right" style="position: absolute; right: 15px; top: 17px;">			<a class="btn btn-link text-lighter btn-toggle-top-right text-decoration-none pull-left" data-toggle="tooltip" data-container="body">				<i class="fa fa-toggle-switch-off fa-1_25x"></i>			</a>			</div>		');
            v.find("body").on("click", ".btn-toggle-top-right", function(d) {
                d.preventDefault();
                if ($(this).find(".fa-toggle-switch-off").length) {
                    v.find('button[onclick*=".show()"]')[0].click();
                    v.find(".btn.btn-xxs.fa-1_25x").removeClass("fa-toggle-switch-off").addClass("fa-toggle-switch");
                    $(this).find(".fa-toggle-switch-off").removeClass("fa-toggle-switch-off").addClass("fa-toggle-switch")
                } else {
                    v.find('button[onclick*=".hide()"]')[0].click();
                    v.find(".btn.btn-xxs.fa-1_25x").removeClass("fa-toggle-switch").addClass("fa-toggle-switch-off");
                    $(this).find(".fa-toggle-switch").addClass("fa-toggle-switch-off").removeClass("fa-toggle-switch")
                }
            })
        }, 0);
        $('html[data-post="viewlogs"] button.glyphicon.glyphicon-resize-vertical').addClass("btn-xxs").removeClass("glyphicon glyphicon-resize-vertical").addClass("fa fa-toggle-switch-off fa-1_25x").removeAttr("data-tooltip").removeAttr("data-title").removeAttr("data-original-title");
        $("body").on("click", ".table.table-striped.table-condensed tbody tr", function(d) {
            $(this).find("button").trigger("click")
        });
        $("body").on("click love", ".btn.btn-xxs.fa-1_25x", function(d) {
            d.preventDefault();
            d.stopImmediatePropagation();
            if ($(this).hasClass("fa-toggle-switch-off")) {
                $(this).removeClass("fa-toggle-switch-off").addClass("fa-toggle-switch")
            } else {
                $(this).removeClass("fa-toggle-switch").addClass("fa-toggle-switch-off")
            }
        });
        $(".table.table-striped.table-condensed").dataTable(N);
        q();
        setTimeout(function() {
            $(".btn-filter-top-right").parent().css("right", "58px")
        }, 100)
    }
    if (v.find('.csf select[name="dur"]')[0]) {
        var I = v.find('.csf select[name="dur"]')[0].nextSibling;
        if (I.nodeValue == ".") {
            $(I).remove()
        }
    }
    var M = $('html[data-post="conf"] .csf form .comment > br:first-child').map(function() {
        this.previousSibling.nodeValue && $(this.previousSibling).wrap('<span class="fst-ln-c">')
    });
    v.find(".csf #paginatediv2.paginationstyle > select").each(function() {
        $(this).attr("style", "vertical-align: top !important")
    });
    v.find(".csf #paginatediv2 > a").each(function() {
        $(this).attr("style", "vertical-align: baseline !important")
    });
    v.find(".csf p > select").each(function() {
        $(this).attr("style", "vertical-align: baseline !important")
    });
    var h = (typeof f.settings_background_color != "undef" && f.settings_background_color === "nightRider" ? 1 : 0);
    v.find('img[src="csfimages/loader.gif"]').each(function() {
        $(this).attr("src", "" + (with_frame ? f.$_____link_full : "") + "/images/loader-horizontal" + (h ? "_dark" : "") + ".gif").css("margin-left", "10px")
    });
    v.find(".paginationstyle a").each(function() {
        $(this).addClass("btn btn-default")
    });
    v.find('img[src^="lfd_"], img[src^="/csf/lfd_"]').each(function() {
        $(this).parents("table").removeClass("table-striped")
    });
    v.find('img[src^="csfimages/delete.png"]').each(function() {
        $(this).replaceWith('<i class="fa fa-unlock text-success" style="font-size: 1.1em; vertical-align: middle;"></i>')
    });
    v.find('img[src^="csfimages/perm.png"]').each(function() {
        $(this).replaceWith('<i class="fa fa-lock text-danger" style="font-size: 1.1em; vertical-align: middle;"></i>')
    });
    v.find('img[src^="csfimages/plus.png"]').each(function() {
        $(this).addClass("hidden");
        b;
        $(this).after('<i class="fa fa-plus-circle text-success margined-right-2" style="font-size: 1.1em;"></i>')
    });
    v.find('img[src^="csfimages/minus.png"]').each(function() {
        $(this).addClass("hidden");
        $(this).after('<i class="fa fa-minus-circle text-danger margined-right-2" style="font-size: 1.1em;"></i>')
    });
    v.find(".csf fieldset legend b").each(function() {
        if ($(this).text().indexOf("Edit ConfigServer Firewall") >= 0) {
            $submit_changes = v.find('input[value="Change"]');
            $submit_changes.addClass("csf-submit_changes");
            $submit_changes.on("click", function() {
                v.find('input[value="saveconf"]').parent("form").submit()
            })
        }
    });
    typeof __csf__listen_log_grep != "undefined" && clearInterval(__csf__listen_log_grep);
    if (v.find("#CSFgrep_D").length && v.find("#CSFgrep_E").length && v.find("#CSFgrep_i").length) {
        v.find('select, input[type="text"], button[onclick="CSFgrep()"]').removeClass("heighter-34").addClass("heighter-28");
        v.find("#CSFgrep_i, #CSFgrep_E, #CSFgrep_D").attr("style", "vertical-align: middle; margin-right: 4px;");
        v.find("#CSFajax").css("margin-bottom", "4px")
    }
    v.find("#CSFajax.csf-box").addClass("csf_force_log_size");
    setTimeout(function() {
        if (typeof window.CodeMirror == "function") {
            e(false, false)
        } else {
            setTimeout(function() {
                if (typeof window.CodeMirror == "function") {
                    e(false, false)
                } else {
                    setTimeout(function() {
                        e(false, false)
                    }, 100)
                }
            }, 100)
        }
    }, 100);

    function L() {
        if (!$("html[data-post]").attr("data-post")) {
            return
        }
        v.find('textarea[name="formdata"]').each(function(P, Q) {
            var d = $(this);
            $parent_width = d.parent("td").width();
            var g = window.CodeMirror.fromTextArea(Q, {
                mode: {
                    name: "rpm-spec"
                },
                matchBrackets: true,
                lineNumbers: true,
                keyMap: "sublime",
                highlightSelectionMatches: {
                    showToken: /\w/,
                    annotateScrollbar: true
                },
                indentUnit: 0,
                autofocus: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                extraKeys: {
                    "Ctrl-Space": "autocomplete"
                },
                styleActiveLine: true,
                lineWrapping: true,
                theme: (with_frame ? f.settings_cm_editor_palette : "monokai")
            });
            $window_height = ($(window).outerHeight() - ($(window).outerHeight() / 2));
            g.setSize($parent_width, $window_height);
            $(window).resize(function() {
                $parent_width = d.parent("td").width();
                $window_height = ($(window).outerHeight() - ($(window).outerHeight() / 2));
                g.setSize($parent_width, $window_height)
            })
        })
    }
    setTimeout(function() {
        if (typeof window.CodeMirror == "function") {
            L()
        } else {
            setTimeout(function() {
                if (typeof window.CodeMirror == "function") {
                    L()
                } else {
                    setTimeout(function() {
                        L()
                    }, 60)
                }
            }, 150)
        }
    }, 60);
    if (v.find("h4").text().indexOf("Ports listening for external connections and the executables running behind them") !== -1) {
        v.find(".container-fluid .panel .panel-body table.table-striped").each(function() {
            v.find("h4").addClass("col_header_custom").attr("style", "margin-bottom: -5px !important; margin-top: 2px !important");
            v.find("h4").replaceText(/:/gi, "");
            $(this).dataTable(N)
        });
        q()
    }
    if (v.find(".csf .table.table-striped.table-condensed tbody th:eq(1)").text().indexOf("A/D") !== -1 && v.find(".csf .table.table-striped.table-condensed tbody th:eq(2)").text().indexOf("IP address") !== -1) {
        v.find('table:not(:contains("©2006-"))').each(function() {
            $('html[data-post="temp"] tr td .btn').attr("data-placement", "right");
            $('html[data-post="temp"] tr td .btn').addClass("btn-xxs").find("span.glyphicon.glyphicon-ban-circle").removeClass("glyphicon glyphicon-ban-circle").addClass("fa fa-ban");
            $('html[data-post="temp"] tr td .btn').find("span.glyphicon.glyphicon-ok-circle").removeClass("glyphicon glyphicon-ok-circle").addClass("fa fa-unlock");
            if (!$(this).find("thead").length) {
                var g = $(this),
                    d = $(this).find("tbody tr:first-child");
                g.prepend("<thead>" + d.html() + "</thead>");
                d.remove();
                $(this).dataTable(N);
                setTimeout(function() {
                    v.find(".csf .dataTable thead tr th:eq(0)").css("opacity", "0").css("pointer-events", "none")
                }, 10)
            }
        });
        q();
        $('.dataTables_wrapper + div:contains("There are no temporary IP entries")').remove();
        $('html[data-post="temp"] .dataTables_wrapper + div').find("a").addClass("btn-xxs btn-inverse").removeClass("btn-success").prepend('<i class="fa fa-fw fa-unlock">&nbsp;</i>')
    }
    if ($("html").attr("data-post") === "") {
        v.find('button[value="conf"]').prepend('<i class="fa fa-cog margined-right-5"></i>');
        v.find('button[value="enable"]').addClass("page_footer_submit btn-success").removeClass("btn-default").prepend('<i class="fa fa-toggle-switch fa-1_25x margined-right-5"></i>');
        v.find('button[value="disable"]').addClass("page_footer_submit btn-danger").removeClass("btn-default").prepend('<i class="fa fa-toggle-switch-off fa-1_25x margined-right-5"></i>');
        v.find('button[value="restart"]').addClass("page_footer_submit btn-info").removeClass("btn-default").prepend('<i class="fa fa-circle-o-notch margined-right-5"></i>');
        v.find('button[value="denyf"]').addClass("page_footer_submit btn-warning").removeClass("btn-default").prepend('<i class="fa fa-unlock margined-right-5"></i>')
    }
    $.each(v.find('input[type="radio"]:not(.iawobject), input[type="checkbox"]:not(.iawobject)'), function() {
        if ($("html").attr("data-post") == "conf") {
            return
        }
        if ($(this).is(":checkbox")) {
            if ($(this)[0]) {
                $___text = $(this)[0].nextSibling
            }
            var R = $(this).next('input:not([type="radio"], [type="checkbox"], [type="hidden"]), select, textarea'),
                P = ($___text && $___text.nodeValue && $.trim($___text.nodeValue).length > 1),
                Q = (P ? $___text.nodeValue : "&nbsp;");
            $(this).addClass("iawobject");
            var d = $(this).attr("id") ? 'for="' + $(this).attr("id") + '"' : false;
            if (d === false && $(this).attr("name") && $(this).val()) {
                var g = "__replaced_" + $(this).attr("name") + "_" + $(this).val() + "";
                var d = 'for="' + g + '"';
                $(this).attr("id", g)
            }
            if ($(this).is(":checkbox")) {
                if ($($___text).length) {
                    $($___text).wrap('<label style="font-weight: 400" class="lawobject" ' + d + ">" + $.trim(Q) + " </label>");
                    $($___text).remove()
                } else {
                    $(this).after('<label class="lawobject" for="' + ($(this).attr("id") ? $(this).attr("id") : $(this).attr("name")) + '">&nbsp;</label>')
                }
            }
            $(this).next("label").addBack().wrapAll('<span class="aw' + $(this).attr("type") + ' awobject awobjectm"></span>')
        } else {
            if ($(this).is(":radio")) {
                $(this).addClass("iawobject vertical-align-middle");
                $(this).after('<label class="lawobject" for="' + $(this).attr("name") + '">&nbsp;</label>');
                $(this).next("label").addBack().wrapAll('<span class="aw' + $(this).attr("type") + ' awobject awobjectm"></span>')
            }
        }
    });
    var B = $('p:contains("..."):contains("Done")');
    if (B.length || $('html[data-post="logtail"], 									html[data-post="allow"],									html[data-post="deny"],									html[data-post="redirect"],									html[data-post="ignorefiles"],									html[data-post="dirwatch"],									html[data-post="dyndns"],									html[data-post="templates"],									html[data-post="logfiles"],									html[data-post="blocklists"],									html[data-post="syslogusers"]').length) {
        $("#csfreturn").parent("form").parent("div").prev("hr").replaceTagName("br");
        B.remove()
    } else {
        if ($('html[data-post="servercheck"], html[data-post="readme"], html[data-post="viewlogs"], html[data-post="chart"], html[data-post="loggrep"], html[data-post="viewports"], html[data-post="profiles"], html[data-post="status"], html[data-post="sips"], html[data-post="temp"]').length) {
            if ($('html[data-post="temp"]') && $('a[href="index.cgi?action=temprm&ip=all"]').length) {} else {
                $("#csfreturn").parent("form").parent("div").prev("hr").replaceTagName("br")
            }
        }
    }
    var c = $("#csfreturn").length;
    $('#csfreturn, 		   html[data-post="rblcheckedit"] input[value="rblcheck"] + input,		   html[data-post="serverchecksave"] input[value="servercheck"] + input,		   html[data-post="temprm"] input[value="temp"] + input,		   html[data-post="temptoperm"] input[value="temp"] + input		').replaceWith('<button type="submit" class="btn btn-' + (c ? "primary" : "default margined-top-10") + ' page_footer_submit"><i class="fa fa-fw fa-arrow-left">&nbsp;</i> Return' + (c ? " to module index" : "") + "</button>");
    var l = $('html input[value="lfdrestart"] + input, html input[value="restart"] + input, html input[value="restartboth"] + input'),
        y = "Save",
        K = "fa-circle-check";
    if (l.length) {
        y = l.val();
        K = "fa-circle-o-notch"
    }
    $('input[value="Change"],		html:not([data-post=""]) input[value="restartboth"] + input,		html:not([data-post=""]) input[value="lfdrestart"] + input,		html:not([data-post=""]) input[value="restart"] + input		').replaceWith('<button type="submit" class="btn btn-default page_footer_submit' + (l.length ? " __restart" : "") + '"><i class="fa fa-fw ' + K + '">&nbsp;</i> ' + y + "</button>");
    $("body").on("click", ".page_footer_submit:not(.disabled)", function(d) {
        x($(this), [2, -27, "small", 600])
    });
    var D = ".panel-heading font",
        p = "bs-callout",
        o = "" + D + " + .circles",
        i = $("." + p + ":visible");
    if (i.length && !$(o).length) {
        $(D).after('<span class="circles"></span>')
    }
    $.each(i, function() {
        var g = $.trim($(this).attr("class").replace(p, "").replace(p + "-", "").replace("text-center", "").replace("collapse", "")),
            d = $(this).text();
        if (!d) {
            return
        }
        $(o).prepend('<span data-tooltip="tooltip" data-container="body" data-html="true" data-placement="bottom" data-title="' + d + '" class="circle ' + g + '"><i class="fa fa-' + ((g == "warning" || g == "danger") ? "exclamation-circle" : (g == "info" ? "info-circle" : "check-circle")) + '"></i></span>');
        $(this).remove()
    });
    if ($("html").attr("data-post") !== "") {
        var H = v.find(".btn-primary.page_footer_submit");
        if (H.length) {
            v.find(".panel-heading font").before('<a href="/csf" class="btn btn-link footer_module_index_top"><i class="fa fa-arrow-left"></i></a>');
            $("body").on("click", ".footer_module_index_top", function(d) {
                d.preventDefault();
                $("body").find(".btn.btn-primary.page_footer_submit").before('<input type="submit" class="submit_tmp_index hidden">');
                $(".submit_tmp_index").trigger("click")
            })
        }
    } else {
        var G = v.find('button[value="conf"]');
        G.parent("form").parent("td").parent("tr").addClass("hidden");
        v.find(".panel-heading font").before('<a href="/" class="btn btn-link footer_module_index_top"><i class="fa fa-cog"></i></a>');
        $("body").on("click", 'a[href="/"].footer_module_index_top', function(d) {
            d.preventDefault();
            G.trigger("click")
        })
    }
    setTimeout(function() {
        w(j, f, with_frame)
    }, 100)
};