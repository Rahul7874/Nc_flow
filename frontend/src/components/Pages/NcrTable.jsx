import React from "react";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
//import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Edit from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { PostTaskData } from "../../services/taskService"
import { PostTaskDataObject } from "../../services/TaskObjectServices"
import { PostNcrModify } from "../../services/ncrmodifyservices";
import { GetAllNcrOptionsData2 } from "../../services/ncroptionServices";
import { GetAllNcrData, NcrDataDelete, UpdateNcr } from "../../services/ncrServices";
const NcrTable = () => {

    // const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const [dataId, setDataid] = useState([]);
    const [Id, setId] = useState("");
    const [Creator, setCreator] = useState("");
    const [CreatorId, setCreatorId] = useState("");
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [openAL, setopenAL] = useState(false)
    const [Type, setType] = useState("")
    const [ProcessStage, setProcessStage] = useState("");
    const [Problem, setProblem] = useState("")
    const [PartNo, setPartNo] = useState("")
    const [Issue, setIssue] = useState("")
    const [FailureType, setFailureType] = useState("")
    const [ReworkHrs, setReworkHrs] = useState("")
    const [RCA, setRca] = useState("")
    const [Resolutionowner, setResolutionowner] = useState("")
    const [ResolutionownerId, setResolutionownerId] = useState("")
    const [RCAValidator, setRCAValidator] = useState("")
    const [Finalapprover, setFinalapprover] = useState("")
    const [RCAValidatorId, setRCAValidatorId] = useState("")
    const [FinalapproverId, setFinalapproverId] = useState("")
    const [created, setCreated] = useState("")
    const [ContainmentAction, setContainmentAction] = useState("")
    const [Causes, setCauses] = useState("")
    const [RootCause, setRootCause] = useState("")
    const [VerifiedCause, setVerifiedCause] = useState("")
    const [IssueCatogorization, setIssueCatogorization] = useState("")
    const [SolutionIdentified, setSolutionIdentified] = useState("")
    const [CreatorStatus, setCreatorStatus] = useState("NA")
    const [ROStatus, setROStatus] = useState("Active")
    const [ValidatorStatus, setValidatorStatus] = useState("NA")
    const [ApproverStatus, setApproverStatus] = useState("NA")
    const [ApproverComment, setApproverComment] = useState("NA")
    const [ROComment, setROComment] = useState("NA")
    const [ValidatorComment, setValidatorComment] = useState("NA")
    const [CreatorComment, setCreatorComment] = useState("NA")

    const [AssignedDate, setAssignedDate] = useState("")
    const [CompletionDate, setCompletionDate] = useState("")

    const { loading, data, skipCount } = useSelector(
        (state) => state.NcrReducer
    );
    const { loading1, data1 } = useSelector(
        (state) => state.roleReducer
    );
    const { loading2, data2 } = useSelector(
        (state) => state.roleReducer
    );
    const { loading3, data3 } = useSelector(
        (state) => state.roleReducer
    );
    const { loading4, data4 } = useSelector(
        (state) => state.NcrOptionReducer
    );

    const getadNCR = async () => {
        dispatch(GetAllNcrData())
        dispatch(GetAllNcrOptionsData2())
    };

    useEffect(() => {
        getadNCR();
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleopenfinalAlert = () => {
        setopenAL(true)
    }
    const handleclosefinalAlert = () => {
        setopenAL(false)
    }

    const handleDelete = (id) => {
        dispatch(NcrDataDelete(id))
        // window.location.href = "/createncr"
    };
    const getncrid = (_id, Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created) => {
        setId(Id)
        setType(Type)
        setDataid(_id)
        setProcessStage(ProcessStage)
        setPartNo(PartNo)
        setProblem(Problem)
        setIssue(Issue)
        setFailureType(FailureType)
        setReworkHrs(ReworkHrs)
        setRca(RCA)
        setResolutionowner(Resolutionowner)
        setResolutionownerId(ResolutionownerId)
        setRCAValidator(RCAValidator)
        setRCAValidatorId(RCAValidatorId)
        setFinalapprover(Finalapprover)
        setFinalapproverId(FinalapproverId)
        setCreator(Creator)
        setCreatorId(CreatorId)
        setCreated(created)
        setOpen(true)

    }
    const updateObs = (_id, Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created) => {
        if (ResolutionownerId === RCAValidatorId) {
            alert("Resolution owner and Validator cannot be Same!")
        }
        else if (ResolutionownerId === FinalapproverId) {
            alert("Resolution owner and Approver cannot be Same!")
        }
        else if (RCAValidatorId === FinalapproverId) {
            alert("Approver and Validator cannot be Same!")
        }
        else {
            dispatch(UpdateNcr({ id: _id, Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId }))
            dispatch(PostNcrModify({ Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created }))
            setOpen(false);
        }
    }


    const getIdforSubmit = (_id, Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created) => {

        setId(Id)
        setType(Type)
        setDataid(_id)
        setProcessStage(ProcessStage)
        setPartNo(PartNo)
        setProblem(Problem)
        setIssue(Issue)
        setFailureType(FailureType)
        setReworkHrs(ReworkHrs)
        setRca(RCA)
        setResolutionowner(Resolutionowner)
        setResolutionownerId(ResolutionownerId)
        setRCAValidator(RCAValidator)
        setRCAValidatorId(RCAValidatorId)
        setFinalapprover(Finalapprover)
        setFinalapproverId(FinalapproverId)
        setCreator(Creator)
        setCreatorId(CreatorId)
        setCreated(created)

        const date = new Date();
        const date2 = new Date();
        const b = date2.getDate()+3;
        setAssignedDate(date)
        setCompletionDate(date2.setDate(b))

        handleopenfinalAlert()
    }


    const submitNcrfinal = ( Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created, ContainmentAction, Causes, RootCause, VerifiedCause, IssueCatogorization, SolutionIdentified, CreatorStatus, ROStatus, ValidatorStatus, ApproverStatus) => {

        dispatch(PostTaskData({ Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created, ContainmentAction, Causes, RootCause, VerifiedCause, IssueCatogorization, SolutionIdentified, CreatorStatus, ROStatus, ValidatorStatus, ApproverStatus }))
        // dispatch(PostTaskDataObject({ Id, Issue,Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created, AssignedDate, CompletionDate, CreatorStatus, ROStatus, ValidatorStatus, ApproverStatus, CreatorComment, ROComment, ValidatorComment, ApproverComment }))
        handleclosefinalAlert()
    }
    let value, value2;
    const setR = (e) => {
        value2 = e.target.value
        const index = value2.lastIndexOf(' ')
        value = value2.substring(0, index)
        setResolutionowner(value)
        setResolutionownerId(value2.substring(index + 1, value2.length))
    }
    const setV = (e) => {
        value2 = e.target.value
        const index = value2.lastIndexOf(' ')
        value = value2.substring(0, index)
        setRCAValidator(value)
        setRCAValidatorId(value2.substring(index + 1, value2.length))
    }
    const setA = (e) => {
        value2 = e.target.value
        const index = value2.lastIndexOf(' ')
        value = value2.substring(0, index)
        setFinalapprover(value)
        setFinalapproverId(value2.substring(index + 1, value2.length))
    }
    if (loading4) {
        return <div>Loading..</div>;
    }
    if (loading) {
        return <div>Loading..</div>;
    }
    else
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    maxWidth
                >
                    <DialogTitle id="scroll-dialog-title" >
                        <Box sx={{ textAlign: "center", fontWeight: "bold" }}>
                            Update NCR
                        </Box>
                    </DialogTitle>
                    <form>
                        <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText>

                                <div className="ncrformmain">
                                    <div>
                                        <Box sx={{ minWidth: 250 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Type
                                                </InputLabel>
                                                <NativeSelect
                                                    name="Type"
                                                    defaultValue={Type}
                                                    onChange={(e) => setType(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    {data4[0].ncr.map((item) =>
                                                        <option value={item.Type}>{item.Type}</option>
                                                    )}

                                                </NativeSelect>
                                            </FormControl>

                                        </Box>
                                        <p>{Error.Type}</p>

                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Where did the problem happend
                                                </InputLabel>
                                                <NativeSelect
                                                    name="Problem"
                                                    defaultValue={Problem}
                                                    onChange={(e) => setProblem(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    {data4[0].ncr.map((item) =>
                                                        <option value={item.Problem} >{item.Problem}</option>
                                                    )}

                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.Problem}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Process stage
                                                </InputLabel>
                                                <NativeSelect
                                                    name="ProcessStage"
                                                    defaultValue={ProcessStage}
                                                    onChange={(e) => setProcessStage(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    {data4[0].ncr.map((item) =>
                                                        <option value={item.ProcessStage} >{item.ProcessStage}</option>
                                                    )}

                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.ProcessStage}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Part No
                                                </InputLabel>
                                                <NativeSelect
                                                    name="PartNo"
                                                    defaultValue={PartNo}
                                                    onChange={(e) => setPartNo(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    {data4[0].ncr.map((item) =>
                                                        <option value={item.PartNo} >{item.PartNo}</option>
                                                    )}

                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.PartNo}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <TextField fullWidth id="outlined-basic" label="Rework Man-Hrs" variant="filled" type="number" required name="ReworkHrs" onChange={(e) => setReworkHrs(e.target.value)} defaultValue={ReworkHrs} />

                                        </Box>
                                        <p>{Error.ReworkHrs}</p>
                                        <Box
                                            component="form"
                                            sx={{
                                                minWidth: 350, mt: 3
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >

                                            <TextField
                                                fullWidth
                                                id="filled-textarea"
                                                label="Issue Description"
                                                placeholder="Placeholder"
                                                multiline
                                                variant="filled"
                                                required
                                                name="Issue"
                                                defaultValue={Issue}
                                                onChange={(e) => setIssue(e.target.value)}
                                            />
                                        </Box>
                                        <p>{Error.Issue}</p>
                                    </div>
                                    <div>
                                        <Box sx={{ minWidth: 350 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Standard failure type
                                                </InputLabel>
                                                <NativeSelect
                                                    name="FailureType"
                                                    defaultValue={FailureType}
                                                    onChange={(e) => setFailureType(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    {data4[0].ncr.map((item) =>
                                                        <option value={item.Ftype}>{item.Ftype}</option>
                                                    )}

                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.FailureType}</p>

                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    RCA Required
                                                </InputLabel>
                                                <NativeSelect
                                                    name="RCA"
                                                    defaultValue={RCA}
                                                    onChange={(e) => setRca(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.RCA}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Resolution owner
                                                </InputLabel>
                                                <NativeSelect
                                                    name="Resolutionowner"
                                                    defaultValue={Resolutionowner}
                                                    onChange={(e) => setR(e)}
                                                >
                                                    <option>Select</option>
                                                    {data1[0].resolutionowner.map((item) =>
                                                        localStorage.getItem("username") === item.username ? ("") : (<option value={item.name + " " + item.username}>{item.name}</option>)
                                                    )}
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.Resolutionowner}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    RCA Validator                                 </InputLabel>
                                                <NativeSelect
                                                    name="RCAValidator"
                                                    defaultValue={RCAValidator}
                                                    onChange={(e) => setV(e)}
                                                >
                                                    <option>Select</option>
                                                    {data2[0].validator.map((item) =>
                                                        localStorage.getItem("username") === item.username ? ("") : (<option value={item.name + " " + item.username}>{item.name}</option>)
                                                    )}
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.RCAValidator}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Final approver                                </InputLabel>
                                                <NativeSelect
                                                    name="Finalapprover"
                                                    defaultValue={Finalapprover}
                                                    onChange={(e) => setA(e)}
                                                >
                                                    <option>Select</option>
                                                    {data3[0].approver.map((item) =>
                                                        localStorage.getItem("username") === item.username ? ("") : (<option value={item.name + " " + item.username}>{item.name}</option>)
                                                    )}
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.Finalapprover}</p>
                                        <Box sx={{ minWidth: 350, mt: 1 }}>Attachments
                                            <TextField fullWidth id="outlined-basic" variant="outlined" type="file" name="source" />
                                        </Box>
                                    </div>
                                </div>

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={(e) => { updateObs(dataId, Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created) }}>Update</Button>
                        </DialogActions>
                    </form>
                </Dialog>
                <table>
                    <thead>
                        <tr>
                            {/* <th>Check</th> */}
                            <th style={{ width: '20px' }}>NCR No</th>
                            <th>Type</th>
                            <th>Problem</th>
                            <th>Part No</th>
                            <th>Process Stage</th>
                            <th>Rework Hrs</th>
                            <th>Failure type</th>
                            <th>Issue Desc</th>
                            <th>RCA</th>
                            <th>Creator</th>
                            <th>Resolution owner</th>
                            <th>Rca Validator</th>
                            <th>Final approver</th>
                            <th>Actions</th>
                            {/* <th>Edit</th> */}
                            {/* <th>Delete</th> */}
                            {/* <th>Submit</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data[0].ncr.map((item, index) =>
                            <tr key={index}>
                                <td style={{ width: '20px' }}>{item.Id}</td>
                                <td>{item.Type}</td>
                                <td>{item.Problem}</td>
                                <td>{item.PartNo}</td>
                                <td>{item.ProcessStage}</td>
                                <td>{item.ReworkHrs}</td>
                                <td>{item.FailureType}</td>
                                <td>{item.Issue}</td>
                                <td>{item.RCA}</td>
                                <td>{item.Creator}</td>
                                <td>{item.Resolutionowner}</td>
                                <td>{item.RCAValidator}</td>
                                <td>{item.Finalapprover}</td>
                                {localStorage.getItem("isAdmin") === "true" ? (<div style={{ display: 'flex' }}>

                                    <IconButton aria-label="edit" size="large" onClick={(e) => { getncrid(item._id, item.Id, item.Type, item.Problem, item.ProcessStage, item.PartNo, item.ReworkHrs, item.Issue, item.FailureType, item.RCA, item.Resolutionowner, item.ResolutionownerId, item.RCAValidator, item.RCAValidatorId, item.Finalapprover, item.FinalapproverId, item.Creator, item.CreatorId, item.created) }}>
                                        <Edit

                                            fontSize="inherit" sx={{ color: '#4cbb17' }} />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="large" onClick={(id) => handleDelete(item._id)} >
                                        <DeleteIcon

                                            fontSize="inherit" sx={{ color: 'red' }} />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="large" onClick={(e) => getIdforSubmit(item._id, item.Id, item.Type, item.Problem, item.ProcessStage, item.PartNo, item.ReworkHrs, item.Issue, item.FailureType, item.RCA, item.Resolutionowner, item.ResolutionownerId, item.RCAValidator, item.RCAValidatorId, item.Finalapprover, item.FinalapproverId, item.Creator, item.CreatorId, item.created)}>
                                        <DoneAllIcon color="success" variant="contained" >Submit</DoneAllIcon>
                                    </IconButton>

                                </div>) : (localStorage.getItem("username") === item.CreatorId ? (<td>
                                    <div style={{ display: 'flex' }}>

                                        <IconButton aria-label="edit" size="large" onClick={(e) => { getncrid(item._id, item.Id, item.Type, item.Problem, item.ProcessStage, item.PartNo, item.ReworkHrs, item.Issue, item.FailureType, item.RCA, item.Resolutionowner, item.ResolutionownerId, item.RCAValidator, item.RCAValidatorId, item.Finalapprover, item.FinalapproverId, item.Creator, item.CreatorId, item.created) }}>
                                            <Edit

                                                fontSize="inherit" sx={{ color: '#4cbb17' }} />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="large" onClick={(id) => handleDelete(item._id)} >
                                            <DeleteIcon

                                                fontSize="inherit" sx={{ color: 'red' }} />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="large" onClick={(e) => getIdforSubmit(item._id, item.Id, item.Type, item.Problem, item.ProcessStage, item.PartNo, item.ReworkHrs, item.Issue, item.FailureType, item.RCA, item.Resolutionowner, item.ResolutionownerId, item.RCAValidator, item.RCAValidatorId, item.Finalapprover, item.FinalapproverId, item.Creator, item.CreatorId, item.created)}>
                                                                                                                                                                                                           {/* ContainmentAction, Causes, RootCause, VerifiedCause, IssueCatogorization, SolutionIdentified, CreatorStatus, ROStatus, ValidatorStatus, ApproverStatus */}
                                            <DoneAllIcon color="success" variant="contained" >Submit</DoneAllIcon>
                                        </IconButton>

                                    </div>
                                </td>) : (<td style={{ width: '20px' }}>NA</td>))}
                            </tr>
                        )}
                    </tbody>
                </table>
                <Dialog
                    open={openAL}
                    onClose={handleclosefinalAlert}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure you want to submit?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleclosefinalAlert}>NO</Button>
                        <Button onClick={(e) => submitNcrfinal( Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created, ContainmentAction, Causes, RootCause, VerifiedCause, IssueCatogorization, SolutionIdentified, CreatorStatus, ROStatus, ValidatorStatus, ApproverStatus)} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
}

export default NcrTable




