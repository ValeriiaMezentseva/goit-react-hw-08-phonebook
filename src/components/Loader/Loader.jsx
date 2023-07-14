import { LoaderBox, ThreeDotsBtn, SpinnerBtn  } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderBox>
            <ThreeDotsBtn color='#FFBB98'/>
        </LoaderBox>
    )
};

export const LoaderSpinner = () => {
    return (
        <LoaderBox>
            <SpinnerBtn color='#FFBB98' />
        </LoaderBox>
    )
};