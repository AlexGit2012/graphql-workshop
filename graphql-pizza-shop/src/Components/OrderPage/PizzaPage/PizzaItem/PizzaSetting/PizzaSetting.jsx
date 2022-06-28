import React, { useCallback } from 'react';
import classNames from 'classnames';
import utilsStyles from '../../../../../utils/utilsStyles.module.css';
import styles from './PizzaSetting.module.css';

const PizzaSetting = ({ name, isActive, index, setting, setSetting, settingObj }) => {
    const settingStyle = classNames({
        [styles.setting]: true,
        [styles.setting_active]: isActive,
        [utilsStyles.noSelect]: true,
    });

    const setNewSettingCB = useCallback(() => {
        setSetting({ ...settingObj, [setting]: name });
    }, [name, setting, settingObj, setSetting]);
    return (
        <div style={{ gridArea: `el${index}` }} className={settingStyle} onClick={setNewSettingCB}>
            {name}
        </div>
    );
};

export default PizzaSetting;
