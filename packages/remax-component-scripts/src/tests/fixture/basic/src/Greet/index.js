import * as React from 'react';
import { View, Text, Image } from 'remax/one';

export default ({ name }) => {
    return (
        <View className="greeting">
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
