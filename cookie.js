var htCookie = {
    /**
     * [브라우저 쿠키 지원여부]
     * @return {[Boolean]}
     */
    bSupport : function(){
        return navigator.cookieEnabled;
    },

    set : function( sName, sValue, htOpt ){
        var aCookie = [];
        var options = htOpt || {};
        var htCookieData = {
            name : encodeURIComponent( sName ) + "=" + encodeURIComponent( sValue );
            path : options.path;
            domain : options.domain;
            expires : options.expires;
        };

        // TODO expires date 설정

        for( v in htCookieDate ){
            if( htCookieDate[v] != undefined ){
                aCookie.push( htCookieDate[v] );
            }
        }

        document.cookie = aCookie.join[';'];
    },

    get : function( sName ){
        if( this.bSupport() === false || document.cookie === '' ){
            return;
        }

        var sCookie = document.cookie.split(';');

        for( var i = 0, j = sCookie.length; i < j; i++ ){
            if( sCookie[i].split('=')[0] === sName ){
                return sCookie[i].split('=')[1];
            }
        }
    },

    delete : function( sName ){
        this.set( sName, '', { expires : -1 } );
    }
};
