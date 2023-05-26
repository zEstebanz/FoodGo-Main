import React, { useState } from 'react';
import { FirebaseContext } from '../firebase';

const welcome = () => {

    const { usuario, firebase } = FirebaseContext;

    return (
        <div>
            {usuario ? (
                <>
                    <div>
                        <h1>Welcome {usuarios.displayName}</h1>
                    </div>

                </>

            ) : (
                <>
                    <div>

                    </div>
                </>
            )}
        </div>
    )
}

export default welcome;