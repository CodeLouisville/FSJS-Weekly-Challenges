//tooltips!
(function ($) {

    var Tooltip = function (element, options) {
        this.$el = $(element);
        this.options = options;

        this.id = new Date().getTime();

        this.$tt = $('<div id="' + this.id + '" class="tooltip fade"></div>');

        this.$el.on('mouseenter', $.proxy(this.show, this))
            .bind('mouseleave destroyed mousedown', $.proxy(this.hide, this));

        this.$el.addClass("tooltip-ready");
    };

    Tooltip.prototype = {
        constructor: Tooltip,

        setString: function (str) {
            this.string = this.$el.data('title');
            if (str) {
                this.string = str;
            } else if (this.$el.attr("title")) {
                this.string = this.$el.attr("title");
                this.$el.attr("title", "");
            } else if (this.options.title) {
                this.string = this.options.title;
            } 
            
            this.$el.data('title', this.string);
            this.$tt.text(this.string);
        },
        
        show: function () {
            // see if we need to update the string
            this.setString();

            if (!this.string) {
                return false; //there's no tooltip to show, man
            }
            
            $("body").append(this.$tt);
           
            var dir, x, y, ax, ay;
            var objTop = this.$el.offset().top;
            var objLeft = this.$el.offset().left;
            var objWidth = this.$el.outerWidth();
            var objHeight = this.$el.outerHeight();

            x = (objLeft + (objWidth / 2)) - (this.$tt.outerWidth() / 2);
            ax = (this.$tt.outerWidth() / 2) - 6;

            //inside a vertical element in the right or left third of the screen,
            // or inside a side drawer - a tad specific, but whatever
            if ((this.$el.hasClass("left") || this.options.direction === "left" ||
                (this.$el.parent().outerWidth() < this.$el.parent().outerHeight() &&
                    this.options.direction !== "above" &&
                        (objLeft > $(window).width() * 0.6 || objLeft + objWidth < $(window).width() * 0.35))) ||
                this.$el.closest(".drawer").hasClass("right") || this.$el.closest(".drawer").hasClass("left")) {

                if (objLeft > $(window).width() * 0.6 || this.$el.closest(".drawer").hasClass("right") ) {
                    dir = "left";
                    x = objLeft - (this.$tt.outerWidth() + 6);
                    ax = this.$tt.outerWidth();
                } else if (objLeft + objWidth < $(window).width() * 0.35 || this.$el.closest(".drawer").hasClass("left")) {
                    x = objLeft + objWidth + 6;
                    ax = -6;
                }
                y = objTop + (objHeight / 2) - (this.$tt.outerHeight() / 2);
                ay = (this.$tt.outerHeight() / 2);

            } else if (this.options.direction === "above" || objTop > $(window).outerHeight() * 0.66) { //in the lower third of the screen
                dir = "above";
                y = objTop - (this.$tt.outerHeight() + 6);
                ay = this.$tt.outerHeight() - 6;

            } else { //default action puts the tooltip below the object
                dir = "below";
                y = objTop + objHeight + 6;
                ay = -6;
            }

            //make sure it isn't off the side of the screen or nothin'
            if (x < 10) {
                x = 10;
                ax = (objLeft - 10) + (objWidth / 2) - 6;
            } else if (x + this.$tt.outerWidth() > $(window).width() - 10) {
                x = ($(window).width() - 10) - this.$tt.outerWidth();
                ax = (objLeft - x) + (objWidth / 2) - 6;
            }
            
            var arrowClass;
            if (dir === "above") {
                arrowClass = "arrow-down";
            } else if (dir === "below") {
                arrowClass = "arrow-up";
            } else if (dir === "left") {
                arrowClass = "arrow-right";
            } else if (dir === "right") {
                arrowClass = "arrow-left";
            }
            
            this.$tt.find('div').remove();
            this.$tt.append($("<div class='" + arrowClass + "'></div>"));

            this.$tt.data("dir", dir).css({
                "left": x + "px",
                "top": y + "px"
            }).find("[class*='arrow-']").css({
                "left": ax + "px",
                "top": ay + "px"
            });
            
            var self = this;
            this.showTimer = setTimeout(function() {
                self.$tt.addClass("in");
            }, this.options.delay);
        },

        hide: function () {
            clearTimeout(this.showTimer);
            
            this.$tt.removeClass("in");

            var self = this;
            setTimeout(function() {
                self.$tt.remove();
            }, 150);
        }
    };

    $.fn.tooltip = function(option) {
        return this.each(function() {
            var data = $(this).data('tooltip'),
                options = typeof option === 'object' && option;
            if (!data) {
                $(this).data('tooltip', (data = new Tooltip(this,
                    $.extend(true, {}, $.fn.tooltip.defaults, options))));
            }
            if (typeof option === "string") {
                data[option]();
            }
        });
    };
    $.fn.tooltip.Constructor = Tooltip;
    $.fn.tooltip.defaults = {
        delay: 0,
        direction: ""
    };

}) (window.jQuery);

