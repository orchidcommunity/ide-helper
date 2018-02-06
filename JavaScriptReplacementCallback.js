//noinspection JSUnusedGlobalSymbols
/**
 * @type{com.ptby.dynamicreturntypeplugin.scripting.api.ExecutingScriptApi}
 */
var api;

function fields(returnTypeNameSpace, returnTypeClass) {
    // api.writeToEventLog('We got: ' + returnTypeNameSpace + '\\' + returnTypeClass);
    var methodValue = returnTypeClass.replace(/\[\]$/, '');

    var orchidNamespace = '\\Orchid\\Platform\\Fields\\Types\\';
    var className = '';
    switch (methodValue) {
        case 'textarea':
            className = orchidNamespace + 'TextAreaField';
            break;
        case 'checkbox':
            className = orchidNamespace + 'CheckBoxField';
            break;
        case 'datetime':
            className = orchidNamespace + 'DateTimerField';
            break;
        case 'wysiwyg':
            className = orchidNamespace + 'TinyMCEField';
            break;
        case 'markdown':
            className = orchidNamespace + 'SimpleMDEField';
            break;
        default:
            className = orchidNamespace + (methodValue[0].toUpperCase() + methodValue.substr(1)) + 'Field';
    }
    // api.writeToEventLog('Hint result: ' + className);
    return className;

}