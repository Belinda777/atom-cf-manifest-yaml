"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const atom_languageclient_commons_1 = require("@pivotal-tools/atom-languageclient-commons");
class ManifestYamlLanguageClient extends atom_languageclient_commons_1.JavaProcessLanguageClient {
    constructor() {
        //noinspection JSAnnotator
        super(path.join(__dirname, '..', 'server'), 'cf-manifest-language-server.jar');
        // this.DEBUG = true;
    }
    getGrammarScopes() {
        return ['source.cf-manifest-yaml'];
    }
    getLanguageName() {
        return 'Manifest-YAML';
    }
    getServerName() {
        return 'CF Manifest YAML';
    }
    activate() {
        // replace the example argument 'linter-ruby' with the name of this Atom package
        require('atom-package-deps')
            .install('cf-manifest-yaml')
            .then(() => console.debug('All dependencies installed, good to go'));
        super.activate();
    }
    launchVmArgs(jvm) {
        return Promise.resolve([
            // '-Xdebug',
            // '-agentlib:jdwp=transport=dt_socket,server=y,address=7999,suspend=n',
            '-Dorg.slf4j.simpleLogger.logFile=manifest-yaml.log',
        ]);
    }
}
exports.ManifestYamlLanguageClient = ManifestYamlLanguageClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuaWZlc3QteWFtbC1sYW5ndWFnZS1jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvbWFuaWZlc3QteWFtbC1sYW5ndWFnZS1jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0IsNEZBQXVGO0FBR3ZGLGdDQUF3QyxTQUFRLHVEQUF5QjtJQUVyRTtRQUNJLDBCQUEwQjtRQUMxQixLQUFLLENBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUNwQyxpQ0FBaUMsQ0FDcEMsQ0FBQztRQUNGLHFCQUFxQjtJQUN6QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLGVBQWUsQ0FBQTtJQUMxQixDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sa0JBQWtCLENBQUE7SUFDN0IsQ0FBQztJQUVELFFBQVE7UUFDSixnRkFBZ0Y7UUFDaEYsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDekUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBUTtRQUNqQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbkIsYUFBYTtZQUNiLHdFQUF3RTtZQUN4RSxvREFBb0Q7U0FDdkQsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBeENELGdFQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBKYXZhUHJvY2Vzc0xhbmd1YWdlQ2xpZW50IH0gZnJvbSAnQHBpdm90YWwtdG9vbHMvYXRvbS1sYW5ndWFnZWNsaWVudC1jb21tb25zJztcbmltcG9ydCB7SlZNfSBmcm9tICdAcGl2b3RhbC10b29scy9qdm0tbGF1bmNoLXV0aWxzJztcblxuZXhwb3J0IGNsYXNzIE1hbmlmZXN0WWFtbExhbmd1YWdlQ2xpZW50IGV4dGVuZHMgSmF2YVByb2Nlc3NMYW5ndWFnZUNsaWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNBbm5vdGF0b3JcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnc2VydmVyJyksXG4gICAgICAgICAgICAnY2YtbWFuaWZlc3QtbGFuZ3VhZ2Utc2VydmVyLmphcidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gdGhpcy5ERUJVRyA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0R3JhbW1hclNjb3BlcygpIHtcbiAgICAgICAgcmV0dXJuIFsnc291cmNlLmNmLW1hbmlmZXN0LXlhbWwnXVxuICAgIH1cblxuICAgIGdldExhbmd1YWdlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdNYW5pZmVzdC1ZQU1MJ1xuICAgIH1cblxuICAgIGdldFNlcnZlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQ0YgTWFuaWZlc3QgWUFNTCdcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgZXhhbXBsZSBhcmd1bWVudCAnbGludGVyLXJ1YnknIHdpdGggdGhlIG5hbWUgb2YgdGhpcyBBdG9tIHBhY2thZ2VcbiAgICAgICAgcmVxdWlyZSgnYXRvbS1wYWNrYWdlLWRlcHMnKVxuICAgICAgICAgICAgLmluc3RhbGwoJ2NmLW1hbmlmZXN0LXlhbWwnKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5kZWJ1ZygnQWxsIGRlcGVuZGVuY2llcyBpbnN0YWxsZWQsIGdvb2QgdG8gZ28nKSk7XG4gICAgICAgIHN1cGVyLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgbGF1bmNoVm1BcmdzKGp2bTogSlZNKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW1xuICAgICAgICAgICAgLy8gJy1YZGVidWcnLFxuICAgICAgICAgICAgLy8gJy1hZ2VudGxpYjpqZHdwPXRyYW5zcG9ydD1kdF9zb2NrZXQsc2VydmVyPXksYWRkcmVzcz03OTk5LHN1c3BlbmQ9bicsXG4gICAgICAgICAgICAnLURvcmcuc2xmNGouc2ltcGxlTG9nZ2VyLmxvZ0ZpbGU9bWFuaWZlc3QteWFtbC5sb2cnLFxuICAgICAgICBdKTtcblxuICAgIH1cblxufSJdfQ==