import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.scss';

export default ({ name }) => {
    return (
        <View className={styles.greeting}>
            <Text>Hello111!!!!1 {name}</Text>

            <View>
                <Image
                    mode="widthFix"
                    src="https://gw.alicdn.com/tfs/TB1FvKecmR26e4jSZFEXXbwuXXa-140-140.svg"
                />
            </View>
        </View>
    )
};
