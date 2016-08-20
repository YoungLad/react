var Note = React.createClass({
    getInitialState: function() {
        return {editing: false}
    },
    edit: function() {
        alert('editing note');
    },
    save: function() {
        this.setState({editing: false});
    }
    remove: function() {
        alert('removing note');
    },
    renderDisplay: function(){
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
            );
    },
    renderForm: function(){
        return(
            <div className="note">
            <textarea defaultValue={this.props.children} className="form-control"</textarea>
            <button className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            )
    
    },
    render: function() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
            );
    }
});

React.render(<Note>Hello World</Note>, 
    document.getElementById('react-container'));