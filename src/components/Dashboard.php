<?php

class Dashboard extends CApplicationComponent
{
    public function register()
    {
        $cs = Yii::app()->getClientScript();
        // IE Polyfills
        $cs->registerScriptFile('/dist/lib/es6-shim.min.js', Yii::app()->clientScript->coreScriptPosition);
        $cs->registerScriptFile('/dist/lib/system-polyfills.js', Yii::app()->clientScript->coreScriptPosition);
        $cs->registerScriptFile('/dist/lib/shims_for_IE.js', Yii::app()->clientScript->coreScriptPosition);

        $cs->registerScriptFile('/dist/lib/angular2-polyfills.js', Yii::app()->clientScript->coreScriptPosition);
        $cs->registerScriptFile('/dist/lib/system.src.js', Yii::app()->clientScript->coreScriptPosition);
        $cs->registerScriptFile('/dist/lib/Rx.js', Yii::app()->clientScript->coreScriptPosition);
        // minified version of angular2 has some issues
        $cs->registerScriptFile('/dist/lib/angular2.js', Yii::app()->clientScript->coreScriptPosition);
        $cs->registerScriptFile('/dist/lib/http.min.js', Yii::app()->clientScript->coreScriptPosition);
    }
}